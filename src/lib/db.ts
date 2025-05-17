/**
 * Central export file for database-related utilities
 * This file provides a consistent way to import database-related objects
 * across the application.
 */

import prismaInstance from './prisma'

// Export the prisma instance as both default and named export
export const prisma = prismaInstance
export default prismaInstance

// Re-export types from Prisma that might be commonly used
export type { Circle, CircleMember, Deposit, User } from '../../generated/prisma'

// Database connection configuration
export const DATABASE_URL =
  process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/circles?schema=public'

// Guide for setting up PostgreSQL locally:
// 1. Install PostgreSQL: https://www.postgresql.org/download/
// 2. Create a database called 'circles'
// 3. Update your .env file with the correct DATABASE_URL
// 4. Run 'npx prisma migrate dev' to create the tables

// PostgreSQL connection options
export const pgOptions = {
  max: 10, // Maximum number of connections in the pool
  connectionTimeoutMillis: 5000, // How long to wait for a connection
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle
}
