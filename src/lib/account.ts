'use server'
import { prisma } from './prisma'

export type Profile = {
  name: string
  avatar: string
  wallet: string
  twitter: string | null
  discord: string | null
  currency: string
  createdAt: Date | number
  updatedAt: Date | number
  deletedAt: Date | number | null
}

async function getNewProfile(walletHash: string) {
  const data = await fetch(`https://randomuser.me/api/?seed=${walletHash}`)
  const { results } = await data.json()
  const name = results[0].name.first + ' ' + results[0].name.last
  const email = results[0].email
  const avatar = results[0].picture.thumbnail
  return { name, avatar: getAvatar() }
}

function getAvatar(): string {
  const id = Math.floor(Math.random() * 50)
  return `https://avatar.iran.liara.run/public/${id}`
}

export async function createAccount(wallet: string): Promise<Profile> {
  console.log('Creating new account for ', wallet)
  const bio = await getNewProfile(wallet)
  const profile: Profile = {
    ...bio,
    wallet,
    currency: 'USD',
    twitter: null,
    discord: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null,
  }

  // Create user in prisma database
  await prisma.user.create({
    data: {
      address: wallet,
      name: profile.name,
      avatar: profile.avatar,
    },
  })

  return profile
}

export async function updateAccount(
  wallet: string,
  { twitter, discord, name }: { name: string; twitter: string; discord: string }
): Promise<Profile> {
  console.log('Updating account for ', wallet)

  // Update user in prisma database
  await prisma.user.update({
    where: { address: wallet },
    data: {
      name,
      // We can't store twitter and discord directly in the User model based on the schema
      // You might want to consider adding these fields to the User model in prisma/schema.prisma
    },
  })

  // For backward compatibility, construct and return the Profile object
  const user = await prisma.user.findUnique({
    where: { address: wallet },
  })

  if (!user) throw new Error('User not found')

  return {
    name: user.name || '',
    avatar: user.avatar || '',
    wallet: user.address,
    twitter,
    discord,
    currency: 'USD',
    createdAt: user.createdAt.getTime(),
    updatedAt: user.updatedAt.getTime(),
    deletedAt: null,
  }
}

export async function getAccount(wallet?: string): Promise<Profile | null> {
  if (!wallet) return null

  const user = await prisma.user.findUnique({
    where: { address: wallet },
  })

  if (!user) return null

  // Convert Prisma User model to Profile type
  return {
    name: user.name || '',
    avatar: user.avatar || '',
    wallet: user.address,
    twitter: null, // Not stored in User model currently
    discord: null, // Not stored in User model currently
    currency: 'USD',
    createdAt: user.createdAt.getTime(),
    updatedAt: user.updatedAt.getTime(),
    deletedAt: null,
  }
}
