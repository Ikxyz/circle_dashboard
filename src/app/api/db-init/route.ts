import { seedDatabase } from '@/lib/db-seed'

import { NextResponse } from 'next/server'
import prisma from '../../../lib/db'

// Mark this route as dynamic to avoid static generation errors
export const dynamic = 'force-dynamic'

// This route is used to initialize the database with sample data
// Only for development purposes - should be secured or removed in production

export async function GET() {
  try {
    // Basic check to make sure we can connect to the database
    await prisma.$connect()

    // Seed the database with sample data
    await seedDatabase()

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully',
    })
  } catch (error) {
    console.error('Database initialization error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to initialize database',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
