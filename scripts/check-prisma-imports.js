/**
 * This script checks all files in the project for incorrect Prisma imports.
 * It identifies files that import from '../prisma' instead of '../db'
 *
 * Run with: node scripts/check-prisma-imports.js
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Directories to exclude from search
const excludeDirs = ['node_modules', '.next', '.git', 'generated']

// Find all TypeScript and JavaScript files
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    if (excludeDirs.includes(file)) {
      return
    }

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      arrayOfFiles.push(filePath)
    }
  })

  return arrayOfFiles
}

console.log('Checking for incorrect Prisma imports...')

try {
  // Use grep to find problematic imports
  const grepCommand =
    "grep -r \"import.*prisma from.*prisma\" --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' src/"

  try {
    const result = execSync(grepCommand, { encoding: 'utf-8' })

    if (result) {
      console.error('⚠️ Found potentially incorrect Prisma imports:')
      console.log(result)
      console.log('\nThese files should import from "../db" instead of "../prisma"')
    }
  } catch (error) {
    // grep returns exit code 1 if no matches, which causes execSync to throw
    if (error.status === 1) {
      console.log('✅ No problematic imports found!')
    } else {
      throw error
    }
  }
} catch (error) {
  console.error('Error executing script:', error.message)
  process.exit(1)
}

console.log('Import check completed.')
