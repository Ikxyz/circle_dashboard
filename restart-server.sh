#!/bin/bash

echo "Cleaning Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

echo "Stopping any running Next.js processes..."
pkill -f "next dev" || true

echo "Starting Next.js development server..."
npm run dev