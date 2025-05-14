import { LOGO_URL } from '@/app/config'
import { prisma } from './prisma'

// Sample data for seeding the database
const sampleUsers = [
  {
    id: '1',
    address: '0x123456789abcdef',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    address: '0xabcdef123456789',
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
]

const sampleCircles = [
  {
    id: 'anyone-can-save',
    name: 'Anyone can save 🔥',
    description: 'Join anyone can save national leaderboard',
    image: LOGO_URL,
    creatorId: '1',
  },
  {
    id: 'nigerians-can-save',
    name: 'Nigerians can save 🇳🇬',
    description: 'Join Nigerians national leaderboard',
    image: LOGO_URL,
    creatorId: '1',
  },
  {
    id: 'ghana',
    name: 'Ghana 🇬🇭',
    description: 'Join Ghana national leaderboard',
    image: LOGO_URL,
    creatorId: '2',
  },
  {
    id: 'based-savers',
    name: 'Based Savers',
    description: 'For those who save on Base',
    image: LOGO_URL,
    creatorId: '2',
  },
]

export async function seedDatabase() {
  console.log('Seeding database...')

  // Create users
  for (const user of sampleUsers) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    })
  }

  // Create circles
  for (const circle of sampleCircles) {
    await prisma.circle.upsert({
      where: { id: circle.id },
      update: circle,
      create: circle,
    })
  }

  // Create some memberships
  await prisma.circleMember.upsert({
    where: {
      userId_circleId: {
        userId: '1',
        circleId: 'anyone-can-save',
      },
    },
    update: {
      totalSaved: 100,
    },
    create: {
      userId: '1',
      circleId: 'anyone-can-save',
      totalSaved: 100,
    },
  })

  await prisma.circleMember.upsert({
    where: {
      userId_circleId: {
        userId: '2',
        circleId: 'anyone-can-save',
      },
    },
    update: {
      totalSaved: 150,
    },
    create: {
      userId: '2',
      circleId: 'anyone-can-save',
      totalSaved: 150,
    },
  })

  console.log('Database seeded successfully')
}

// Run this function to seed the database
// Uncomment to automatically seed when imported
// seedDatabase().catch(console.error);
