import { prisma } from './prisma'

// Function to find a user by wallet address or create one if not found
export async function findOrCreateUser(address: string, name?: string, avatar?: string) {
  let user = await prisma.user.findUnique({
    where: { address },
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        address,
        name: name || `User-${address.substring(0, 6)}`,
        avatar: avatar || `https://robohash.org/${address}.png`,
      },
    })
  }

  return user
}

// Get user profile with circles they're members of
export async function getUserProfile(address: string) {
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

  return user
}

// Get user circles with membership details
export async function getUserCircles(userId: string) {
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

  return memberships
}

// Get user's total savings across all circles
export async function getUserTotalSavings(userId: string) {
  const result = await prisma.circleMember.aggregate({
    where: {
      userId,
    },
    _sum: {
      totalSaved: true,
    },
  })

  return result._sum.totalSaved || 0
}
