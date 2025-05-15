import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

// GET endpoint to get the leaderboard for a circle
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const circleId = searchParams.get('circleId')

  if (!circleId) {
    return NextResponse.json({ error: 'Circle ID is required' }, { status: 400 })
  }

  try {
    const leaderboard = await prisma.circleMember.findMany({
      where: {
        circleId,
      },
      orderBy: {
        totalSaved: 'desc',
      },
      include: {
        user: true,
      },
      take: 10,
    })

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
  }
}
