/**
 * Helper script to set up Prisma URLs for Vercel deployment
 * Specifically optimized for Neon PostgreSQL
 */

console.log('Setting up Prisma URLs for deployment...')

const dbUrl = process.env.DATABASE_URL || ''

// Check for Neon database URL
if (dbUrl.includes('neon.tech')) {
  console.log('Detected Neon database connection')

  // Extract direct connection URL from pooler connection if needed
  if (dbUrl.includes('-pooler.') && !process.env.DIRECT_URL) {
    console.log('Converting pooler URL to direct URL for DIRECT_URL environment variable')
    const directUrl = dbUrl.replace('-pooler.', '.')
    process.env.DIRECT_URL = directUrl
    console.log('DIRECT_URL set for direct connections (migrations/introspection)')
  } else if (!process.env.DIRECT_URL) {
    console.log('Setting DIRECT_URL to the same as DATABASE_URL')
    process.env.DIRECT_URL = dbUrl
  }
}
// If standard PostgreSQL URL
else if (dbUrl.startsWith('postgresql://') || dbUrl.startsWith('postgres://')) {
  console.log('Using direct PostgreSQL connection')
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
  console.warn('WARNING: DATABASE_URL is not properly set or has an unknown format')
  console.warn('Please set DATABASE_URL to a valid PostgreSQL URL')
}

console.log('Prisma URL setup complete!')
