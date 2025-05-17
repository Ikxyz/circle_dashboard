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

let dbUrl = process.env.DATABASE_URL || ''

// Handle case where DATABASE_URL is not set or invalid for build environment
if (
  !dbUrl ||
  !(
    dbUrl.startsWith('postgresql://') ||
    dbUrl.startsWith('postgres://') ||
    dbUrl.startsWith('prisma://') ||
    dbUrl.startsWith('prisma+postgres://')
  )
) {
  console.warn('DATABASE_URL not set or has invalid format. Using dummy URL for build.')
  console.warn('This is fine for build process but will not work for actual database operations.')

  // Set a dummy URL for build process to complete
  dbUrl = 'postgresql://dummy:dummy@localhost:5432/dummy?schema=public'
  process.env.DATABASE_URL = dbUrl
}

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
    // Use a dummy direct URL for build if not specified
    process.env.DIRECT_URL = 'postgresql://dummy:dummy@localhost:5432/dummy?schema=public'
    console.warn('Set fallback DIRECT_URL for build process.')
  }
}

console.log('Prisma URL setup complete!')
