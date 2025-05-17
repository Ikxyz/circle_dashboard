import { LOGO_URL } from '@/app/config'
import Utils from '@/lib/util'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/db'

// Mark this route as dynamic to avoid static generation errors
export const dynamic = 'force-dynamic'

// GET endpoint to get all circles or a specific circle
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  try {
    // If ID is provided, get a specific circle
    if (id) {
      const cleanId = Utils.cleanString(id)
      const circle = await prisma.circle.findUnique({
        where: { id: cleanId },
        include: {
          members: true,
        },
      })

      if (!circle) {
        return NextResponse.json({ error: 'Circle not found' }, { status: 404 })
      }

      return NextResponse.json({
        id: circle.id,
        name: circle.name,
        description: circle.description || '',
        image: circle.image || LOGO_URL,
        createdAt: circle.createdAt,
        updatedAt: circle.updatedAt,
        noOfParticipants: circle.members.length,
        totalSaved: circle.balance,
        creator: circle.creatorId,
        category: 'Custom',
      })
    }

    // Otherwise, get all circles with pagination
    const circles = await prisma.circle.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        members: true,
      },
    })

    const formattedCircles = circles.map((circle: any) => ({
      id: circle.id,
      name: circle.name,
      description: circle.description || '',
      image: circle.image || LOGO_URL,
      createdAt: circle.createdAt,
      updatedAt: circle.updatedAt,
      noOfParticipants: circle.members.length,
      totalSaved: circle.balance,
      creator: circle.creatorId,
      category: 'Custom',
    }))

    return NextResponse.json(formattedCircles)
  } catch (error) {
    console.error('Error fetching circles:', error)
    return NextResponse.json({ error: 'Failed to fetch circles' }, { status: 500 })
  }
}

// POST endpoint to create a new circle or deposit to a circle
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    console.log('POST /api/circle received:', body)

    // Check if this is a deposit operation
    if (body.circleId && body.wallet && body.amount !== undefined) {
      const { circleId, wallet, amount, txHash } = body
      console.log('Processing deposit:', { circleId, wallet, amount, txHash })

      if (isNaN(amount)) {
        return NextResponse.json({ error: 'Invalid amount value' }, { status: 400 })
      }

      if (!txHash) {
        return NextResponse.json({ error: 'Transaction hash is required' }, { status: 400 })
      }

      // Get user by wallet address
      const user = await prisma.user.findUnique({
        where: { address: wallet },
      })

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
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

      return NextResponse.json({ message: 'Deposit successful' })
    }

    // If not a deposit, then it's creating a new circle
    const { name, description, image, creator } = body

    if (!name || !creator) {
      return NextResponse.json({ error: 'Name and creator are required' }, { status: 400 })
    }

    const id = Utils.cleanString(name)

    // Check if circle already exists
    const existingCircle = await prisma.circle.findUnique({
      where: { id },
    })

    if (existingCircle) {
      return NextResponse.json(existingCircle)
    }

    // Create new circle
    const circle = await prisma.circle.create({
      data: {
        id,
        name,
        description: description || '',
        image: image || LOGO_URL,
        creatorId: creator,
      },
    })

    return NextResponse.json(circle)
  } catch (error) {
    console.error('Error in circle POST:', error)
    return NextResponse.json({ error: 'Failed to process circle operation' }, { status: 500 })
  }
}

// PUT endpoint for joining a circle
export async function PUT(req: NextRequest) {
  try {
    const { circleId, userId } = await req.json()

    if (!circleId || !userId) {
      return NextResponse.json({ error: 'Circle ID and User ID are required' }, { status: 400 })
    }

    // Check if user is already a member
    const existingMember = await prisma.circleMember.findUnique({
      where: {
        userId_circleId: {
          userId,
          circleId,
        },
      },
    })

    if (existingMember) {
      return NextResponse.json({ message: 'User is already a member of this circle' })
    }

    // Join the circle
    await prisma.circleMember.create({
      data: {
        userId,
        circleId,
        joinedAt: new Date(),
        totalSaved: 0,
      },
    })

    return NextResponse.json({ message: 'Successfully joined the circle' })
  } catch (error) {
    console.error('Error joining circle:', error)
    return NextResponse.json({ error: 'Failed to join circle' }, { status: 500 })
  }
}

// PATCH endpoint to get user circles
export async function PATCH(req: NextRequest) {
  try {
    const { wallerId, page = 1, limit = 10 } = await req.json()

    if (!wallerId) {
      return NextResponse.json({ error: 'Wallet ID is required' }, { status: 400 })
    }

    const memberships = await prisma.circleMember.findMany({
      where: {
        userId: wallerId,
      },
      include: {
        circle: {
          include: {
            members: true,
          },
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    })

    const userCircles = memberships.map((membership: any) => ({
      id: membership.circle.id,
      name: membership.circle.name,
      description: membership.circle.description || '',
      image: membership.circle.image || LOGO_URL,
      createdAt: membership.circle.createdAt,
      updatedAt: membership.circle.updatedAt,
      noOfParticipants: membership.circle.members.length,
      totalSaved: membership.circle.balance,
      creator: membership.circle.creatorId,
      category: 'Custom',
    }))

    return NextResponse.json(userCircles)
  } catch (error) {
    console.error('Error fetching user circles:', error)
    return NextResponse.json({ error: 'Failed to fetch user circles' }, { status: 500 })
  }
}

// Create additional endpoints in separate route files

// create trending.ts for trending circles
// create leaderboard.ts for leaderboard functionality
