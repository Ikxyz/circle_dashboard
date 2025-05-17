import { LOGO_URL } from '@/app/config'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/db'

// Mark this route as dynamic to avoid static generation errors
export const dynamic = 'force-dynamic'

// Simple POST endpoint for deposits only
export async function POST(req: NextRequest) {
  try {
    console.log('POST /api/circle-deposit received')
    const body = await req.json()
    console.log('Request body:', body)

    // Check if this is a deposit operation with required fields
    if (!body.circleId || !body.wallet || body.amount === undefined || !body.txHash) {
      return NextResponse.json(
        {
          error: 'Missing required fields (circleId, wallet, amount, txHash)',
        },
        { status: 400 }
      )
    }

    const { circleId, wallet, amount, txHash } = body

    if (isNaN(amount)) {
      return NextResponse.json({ error: 'Invalid amount value' }, { status: 400 })
    }

    // Get user by wallet address or create if doesn't exist
    let user = await prisma.user.findUnique({
      where: { address: wallet },
    })

    // Create user if not found
    if (!user) {
      console.log(`User with wallet ${wallet} not found, creating new user`)
      user = await prisma.user.create({
        data: {
          address: wallet,
          name: `User-${wallet.substring(0, 8)}`,
          avatar: `https://robohash.org/${wallet}.png`,
        },
      })
      console.log(`Created new user:`, user)
    }

    // Check if circle exists
    let circle = await prisma.circle.findUnique({
      where: { id: circleId },
    })

    // Create circle if not found
    if (!circle) {
      console.log(`Circle with ID ${circleId} not found, creating new circle`)
      circle = await prisma.circle.create({
        data: {
          id: circleId,
          name: circleId.charAt(0).toUpperCase() + circleId.slice(1), // Capitalize first letter
          description: `Auto-created circle for ${circleId}`,
          image: LOGO_URL,
          creatorId: user.id,
        },
      })
      console.log(`Created new circle:`, circle)
    }

    // Get circle member or create if doesn't exist
    let member = await prisma.circleMember.findUnique({
      where: {
        userId_circleId: {
          userId: user.id,
          circleId,
        },
      },
    })

    if (!member) {
      member = await prisma.circleMember.create({
        data: {
          userId: user.id,
          circleId,
          totalSaved: 0,
        },
      })
    }

    // Update in a transaction
    await prisma.$transaction([
      // Update member's total saved
      prisma.circleMember.update({
        where: { id: member.id },
        data: {
          totalSaved: { increment: amount },
        },
      }),

      // Update circle balance
      prisma.circle.update({
        where: { id: circleId },
        data: {
          balance: { increment: amount },
        },
      }),

      // Create deposit record
      prisma.deposit.create({
        data: {
          amount,
          userId: user.id,
          circleId,
          memberId: member.id,
          txHash,
        },
      }),
    ])

    return NextResponse.json({
      message: 'Deposit successful',
      success: true,
    })
  } catch (error) {
    console.error('Error in deposit processing:', error)
    return NextResponse.json(
      {
        error: 'Failed to process deposit operation',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
