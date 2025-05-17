import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/db'

// Mark this route as dynamic to avoid static generation errors
export const dynamic = 'force-dynamic'

// Function to get a random avatar
function getAvatar(): string {
  const id = Math.floor(Math.random() * 50)
  return `https://avatar.iran.liara.run/public/${id}`
}

// Function to get new profile data
async function getNewProfile(walletHash: string) {
  const data = await fetch(`https://randomuser.me/api/?seed=${walletHash}`)
  const { results } = await data.json()
  const name = results[0].name.first + ' ' + results[0].name.last
  const avatar = results[0].picture.thumbnail
  return { name, avatar: getAvatar() }
}

// GET endpoint to retrieve account by wallet address
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const wallet = searchParams.get('wallet')

  if (!wallet) {
    return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { address: wallet },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Convert Prisma User model to Profile type
    return NextResponse.json({
      name: user.name || '',
      avatar: user.avatar || '',
      wallet: user.address,
      twitter: null, // Not stored in User model currently
      discord: null, // Not stored in User model currently
      currency: 'USD',
      createdAt: user.createdAt.getTime(),
      updatedAt: user.updatedAt.getTime(),
      deletedAt: null,
    })
  } catch (error) {
    console.error('Error fetching account:', error)
    return NextResponse.json({ error: 'Failed to fetch account' }, { status: 500 })
  }
}

// POST endpoint to create a new account
export async function POST(req: NextRequest) {
  try {
    const { wallet } = await req.json()

    if (!wallet) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { address: wallet },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const bio = await getNewProfile(wallet)

    // Create user in prisma database
    const user = await prisma.user.create({
      data: {
        address: wallet,
        name: bio.name,
        avatar: bio.avatar,
      },
    })

    return NextResponse.json({
      name: user.name || '',
      avatar: user.avatar || '',
      wallet: user.address,
      twitter: null,
      discord: null,
      currency: 'USD',
      createdAt: user.createdAt.getTime(),
      updatedAt: user.updatedAt.getTime(),
      deletedAt: null,
    })
  } catch (error) {
    console.error('Error creating account:', error)
    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 })
  }
}

// PUT endpoint to update an account
export async function PUT(req: NextRequest) {
  try {
    const { wallet, twitter, discord, name } = await req.json()

    if (!wallet) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 })
    }

    // Update user in prisma database
    await prisma.user.update({
      where: { address: wallet },
      data: {
        name,
        // We can't store twitter and discord directly in the User model based on the schema
        // These would need to be added to the User model in prisma/schema.prisma
      },
    })

    // Get updated user data
    const user = await prisma.user.findUnique({
      where: { address: wallet },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      name: user.name || '',
      avatar: user.avatar || '',
      wallet: user.address,
      twitter,
      discord,
      currency: 'USD',
      createdAt: user.createdAt.getTime(),
      updatedAt: user.updatedAt.getTime(),
      deletedAt: null,
    })
  } catch (error) {
    console.error('Error updating account:', error)
    return NextResponse.json({ error: 'Failed to update account' }, { status: 500 })
  }
}
