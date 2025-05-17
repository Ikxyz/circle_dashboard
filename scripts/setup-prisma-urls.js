/**
 * Helper script to set up Prisma URLs for Vercel deployment
 *
 * This script checks if the DATABASE_URL starts with postgresql:// or postgres://
 * If it does, it sets DIRECT_URL to the same value
 *
 * If the DATABASE_URL starts with prisma:// or prisma+postgres://, it means
 * we're using Prisma Accelerate, and we need to keep the configuration as is
 */

console.log('Setting up Prisma URLs for deployment...')

const dbUrl = process.env.DATABASE_URL || ''

// If DATABASE_URL is a direct PostgreSQL URL
if (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) {
  console.log('Using direct PostgreSQL connection.')
  console.log('Setting DIRECT_URL to the same value as DATABASE_URL')
  process.env.DIRECT_URL = dbUrl
}
// If DATABASE_URL is a Prisma Accelerate URL
else if (dbUrl.startsWith('prisma://') || dbUrl.startsWith('prisma+postgres://')) {
  console.log('Using Prisma Accelerate for database connections.')
  if (!process.env.DIRECT_URL) {
    console.warn('WARNING: DIRECT_URL is not set. Please make sure to set it for migrations and introspection.')
  }
}
// Invalid or empty URL
else {
  console.warn('WARNING: DATABASE_URL is not properly set or has an unknown format.')
  console.warn('Please set DATABASE_URL to a valid PostgreSQL or Prisma Accelerate URL.')
}

console.log('Prisma URL setup complete!')
