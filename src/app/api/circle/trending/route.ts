import { LOGO_URL } from '@/app/config'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET endpoint to get trending circles
export async function GET() {
  try {
    // Get most active circles based on number of deposits
    const circles = await prisma.circle.findMany({
      include: {
        members: true,
        deposits: {
          orderBy: {
            depositDate: 'desc',
          },
          take: 10,
        },
      },
      orderBy: {
        balance: 'desc',
      },
      take: 8,
    })

    const trendingCircles = circles.map((circle: any) => ({
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

    return NextResponse.json(trendingCircles)
  } catch (error) {
    console.error('Error fetching trending circles:', error)
    return NextResponse.json({ error: 'Failed to fetch trending circles' }, { status: 500 })
  }
}
