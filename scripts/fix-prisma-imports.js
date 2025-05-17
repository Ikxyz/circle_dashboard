/**
 * This script automatically fixes incorrect Prisma imports across the project.
 * It replaces import statements that import from '../prisma' with '../db'.
 *
 * Run with: node scripts/fix-prisma-imports.js
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

console.log('Finding files with incorrect Prisma imports...')

try {
  // Find all files with problematic imports
  const grepCommand =
    "grep -l \"import.*prisma from.*prisma\" --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' -r src/"

  let filesToFix = []

  try {
    const result = execSync(grepCommand, { encoding: 'utf-8' })
    filesToFix = result
      .trim()
      .split('\n')
      .filter((file) => file)
  } catch (error) {
    // grep returns exit code 1 if no matches, which causes execSync to throw
    if (error.status === 1) {
      console.log('✅ No problematic imports found!')
      process.exit(0)
    } else {
      throw error
    }
  }

  if (filesToFix.length === 0) {
    console.log('✅ No problematic imports found!')
    process.exit(0)
  }

  console.log(`Found ${filesToFix.length} files with incorrect imports:`)
  console.log(filesToFix.join('\n'))
  console.log('\nFixing imports...')

  // Fix imports in each file
  let fixedCount = 0

  filesToFix.forEach((filePath) => {
    try {
      const content = fs.readFileSync(filePath, 'utf-8')

      // Replace all variations of prisma imports
      const fixedContent = content.replace(
        /import(\s+)prisma(\s+)from(\s+)(['"])(.*)prisma(['"])/g,
        (match, s1, s2, s3, q1, path, q2) => {
          // Determine the correct number of '../' to use
          const segments = path.split('/')
          const lastSegment = segments.pop() // Remove 'prisma'
          return `import${s1}prisma${s2}from${s3}${q1}${segments.join('/')}db${q2}`
        }
      )

      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf-8')
        console.log(`✓ Fixed: ${filePath}`)
        fixedCount++
      } else {
        console.log(`⚠ No changes needed: ${filePath}`)
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message)
    }
  })

  console.log(`\nFixed imports in ${fixedCount} files.`)
} catch (error) {
  console.error('Error executing script:', error.message)
  process.exit(1)
}
