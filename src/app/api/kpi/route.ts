import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/db'

// Mark this route as dynamic to avoid static generation errors
export const dynamic = 'force-dynamic'

// GET endpoint to fetch KPIs for dashboard
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const walletAddress = searchParams.get('wallet')
    const timeframe = searchParams.get('timeframe') || 'week' // Defaults to 'week'

    console.log(`Fetching KPIs for wallet: ${walletAddress}, timeframe: ${timeframe}`)

    // Calculate date range based on timeframe
    const today = new Date()
    let startDate = new Date()

    switch (timeframe) {
      case 'two_weeks':
        startDate.setDate(today.getDate() - 14)
        break
      case 'month':
        startDate.setMonth(today.getMonth() - 1)
        break
      case 'quarter':
        startDate.setMonth(today.getMonth() - 3)
        break
      case 'week':
      default:
        startDate.setDate(today.getDate() - 7)
    }

    // Get total circles count
    const totalCircles = await prisma.circle.count()

    // Get circles balance
    const circlesBalanceResult = await prisma.circle.aggregate({
      _sum: {
        balance: true,
      },
    })
    const circlesBalance = circlesBalanceResult._sum.balance || 0

    // Get total members count - fixing the distinct count
    // First get all members
    const allMembers = await prisma.circleMember.findMany({
      select: {
        userId: true,
      },
    })
    // Then get unique user IDs
    const uniqueUserIds = new Set(allMembers.map((member) => member.userId))
    const totalMembers = uniqueUserIds.size

    // Get user-specific data if wallet address is provided
    let userTotalSaved = 0
    if (walletAddress) {
      const user = await prisma.user.findUnique({
        where: { address: walletAddress },
      })

      if (user) {
        // Get user's total savings
        const userSavings = await prisma.circleMember.aggregate({
          where: { userId: user.id },
          _sum: {
            totalSaved: true,
          },
        })
        userTotalSaved = userSavings._sum.totalSaved || 0
      }
    }

    // Get highest savers
    const topSavers = await prisma.circleMember.findMany({
      take: 10,
      orderBy: {
        totalSaved: 'desc',
      },
      include: {
        user: true,
      },
    })

    // Format leaderboard data
    const leaderboard = topSavers.map((saver, index) => ({
      rank: index + 1,
      userId: saver.userId,
      username: saver.user.name || `User-${saver.user.address.substring(0, 8)}`,
      wallet: saver.user.address,
      avatar: saver.user.avatar || `https://robohash.org/${saver.user.address}.png`,
      amountSaved: saver.totalSaved,
      joinedAt: saver.joinedAt,
    }))

    // Calculate period change metrics (mock for now, would need previous period data)
    // In a real implementation, you would compare with previous period data
    const circlesBalanceChange = '+4.5%'
    const totalCirclesChange = '+0.5%'
    const totalMembersChange = '+4.5%'
    const userTotalSavedChange = '+21.2%'

    return NextResponse.json({
      kpi: {
        circlesBalance: {
          value: circlesBalance,
          change: circlesBalanceChange,
        },
        totalCircles: {
          value: totalCircles,
          change: totalCirclesChange,
        },
        totalMembers: {
          value: totalMembers,
          change: totalMembersChange,
        },
        userTotalSaved: {
          value: userTotalSaved,
          change: userTotalSavedChange,
        },
      },
      leaderboard,
    })
  } catch (error) {
    console.error('Error fetching KPIs:', error)
    return NextResponse.json({ error: 'Failed to fetch KPI data' }, { status: 500 })
  }
}
