import { NextRequest, NextResponse } from 'next/server'

// Simple GET endpoint for testing API routes
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'API route is working!' })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    return NextResponse.json({
      message: 'POST endpoint is working!',
      receivedData: body,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Error processing request' }, { status: 400 })
  }
}
