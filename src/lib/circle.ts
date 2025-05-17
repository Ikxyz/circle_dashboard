import { LOGO_URL } from '@/app/config'
import prisma from './prisma'
import Utils from './util'

export type CircleCategory = 'Country' | 'City' | 'State' | 'Region' | 'Continent' | 'Custom' | 'User'

export type Circle = {
  id: string
  name: string
  noOfParticipants?: number
  totalSaved?: number
  description: string
  category?: CircleCategory
  image: string
  createdAt: number | Date
  updatedAt: number | Date
  creator: string
  isPrivate?: boolean
}

export const Circle = async (arg: {
  name: string
  isPrivate?: false
  category?: string
  image?: string
  noOfParticipants?: number
  creator?: string
  totalSaved?: number
  description: string
  createdAt?: number
  updatedAt?: number
}) => {
  return {
    id: Utils.cleanString(arg.name),
    name: arg.name,
    noOfParticipants: arg?.noOfParticipants ?? 0,
    isPrivate: arg.isPrivate ?? false,
    totalSaved: arg.totalSaved ?? 0,
    description: arg.description,
    creator: arg.creator ?? 'system',
    category: arg.category ?? 'Custom',
    image: arg.image ?? LOGO_URL,
    createdAt: arg.createdAt ?? Date.now(),
    updatedAt: arg.updatedAt ?? Date.now(),
  }
}

async function createCircle(arg: Circle) {
  const exist = await getCircle(arg.id)
  if (exist) return exist

  return await prisma.circle.create({
    data: {
      id: arg.id,
      name: arg.name,
      description: arg.description,
      image: arg.image,
      createdAt: new Date(arg.createdAt as number),
      updatedAt: new Date(arg.updatedAt as number),
      creatorId: arg.creator,
    },
  })
}

export async function getAllCircles(page = 1, limit = 10): Promise<Circle[]> {
  const circles = await prisma.circle.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      members: true,
    },
  })

  return circles.map((circle: any) => ({
    id: circle.id,
    name: circle.name,
    description: circle.description || '',
    image: circle.image || LOGO_URL,
    createdAt: circle.createdAt,
    updatedAt: circle.updatedAt,
    noOfParticipants: circle.members.length,
    totalSaved: circle.balance,
    creator: circle.creatorId,
    category: 'Custom' as CircleCategory,
  }))
}

export async function getCircle(arg: string): Promise<Circle | null> {
  const id = Utils.cleanString(arg)
  const circle = await prisma.circle.findUnique({
    where: { id },
    include: {
      members: true,
    },
  })

  if (!circle) return null

  return {
    id: circle.id,
    name: circle.name,
    description: circle.description || '',
    image: circle.image || LOGO_URL,
    createdAt: circle.createdAt,
    updatedAt: circle.updatedAt,
    noOfParticipants: circle.members.length,
    totalSaved: circle.balance,
    creator: circle.creatorId,
    category: 'Custom' as CircleCategory,
  }
}

export async function joinCircle(circleId: string, userId: string) {
  await prisma.circleMember.create({
    data: {
      userId,
      circleId,
      joinedAt: new Date(),
      totalSaved: 0,
    },
  })
}

export async function getIsUserInCircle(circleId: string, userId: string) {
  const member = await prisma.circleMember.findUnique({
    where: {
      userId_circleId: {
        userId,
        circleId,
      },
    },
  })

  return member
}

export async function getUserCircles(wallerId: string, page = 1, limit = 10): Promise<Circle[]> {
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

  return memberships.map((membership: any) => ({
    id: membership.circle.id,
    name: membership.circle.name,
    description: membership.circle.description || '',
    image: membership.circle.image || LOGO_URL,
    createdAt: membership.circle.createdAt,
    updatedAt: membership.circle.updatedAt,
    noOfParticipants: membership.circle.members.length,
    totalSaved: membership.circle.balance,
    creator: membership.circle.creatorId,
    category: 'Custom' as CircleCategory,
  }))
}

export async function getTreadingCircles(): Promise<Array<Circle>> {
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

  return circles.map((circle: any) => ({
    id: circle.id,
    name: circle.name,
    description: circle.description || '',
    image: circle.image || LOGO_URL,
    createdAt: circle.createdAt,
    updatedAt: circle.updatedAt,
    noOfParticipants: circle.members.length,
    totalSaved: circle.balance,
    creator: circle.creatorId,
    category: 'Custom' as CircleCategory,
  }))
}

export async function depositToCircle(arg: { circleId: string; wallet: string; amount: number; txHash: string }) {
  const { amount: amt, circleId, wallet, txHash } = arg
  const amount = Number(amt)

  // Get user by wallet address
  const user = await prisma.user.findUnique({
    where: { address: wallet },
  })

  if (!user) {
    throw new Error('User not found')
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
}

export async function getLeaderBoard(circleId: string) {
  return await prisma.circleMember.findMany({
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
}
