import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET endpoint to find or create a user (find-or-create)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const address = searchParams.get('address')

  if (!address) {
    return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 })
  }

  try {
    // Look for existing user
    let user = await prisma.user.findUnique({
      where: { address },
    })

    // If not found, create a new user
    if (!user) {
      const name = searchParams.get('name') || `User-${address.substring(0, 6)}`
      const avatar = searchParams.get('avatar') || `https://robohash.org/${address}.png`

      user = await prisma.user.create({
        data: {
          address,
          name,
          avatar,
        },
      })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error in find or create user:', error)
    return NextResponse.json({ error: 'Failed to find or create user' }, { status: 500 })
  }
}

// GET endpoint to get user profile with circles they're members of
export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json()

    if (!address) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { address },
      include: {
        memberships: {
          include: {
            circle: true,
          },
        },
        createdCircles: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return NextResponse.json({ error: 'Failed to fetch user profile' }, { status: 500 })
  }
}

// Endpoint to get user circles with membership details
export async function PUT(req: NextRequest) {
  try {
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    const memberships = await prisma.circleMember.findMany({
      where: {
        userId,
      },
      include: {
        circle: true,
      },
      orderBy: {
        joinedAt: 'desc',
      },
    })

    return NextResponse.json(memberships)
  } catch (error) {
    console.error('Error fetching user circles:', error)
    return NextResponse.json({ error: 'Failed to fetch user circles' }, { status: 500 })
  }
}

// Endpoint to get user's total savings
export async function PATCH(req: NextRequest) {
  try {
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    const result = await prisma.circleMember.aggregate({
      where: {
        userId,
      },
      _sum: {
        totalSaved: true,
      },
    })

    return NextResponse.json({ totalSavings: result._sum.totalSaved || 0 })
  } catch (error) {
    console.error('Error calculating total savings:', error)
    return NextResponse.json({ error: 'Failed to calculate total savings' }, { status: 500 })
  }
}
