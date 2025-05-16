'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

// Type for deposit request
type DepositRequest = {
  circleId: string
  wallet: string
  amount: number
  txHash: string
}

// Deposit funds to a circle
const depositToCircle = async (data: DepositRequest): Promise<{ message: string }> => {
  console.log('Making deposit request with data:', data)

  try {
    // Full path to ensure correct routing
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/circle`
      : 'http://localhost:3000/api/circle'

    console.log('Using API URL:', apiUrl)

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('Deposit response status:', response.status)

      if (response.ok) {
        const result = await response.json()
        console.log('Deposit success response:', result)
        return result
      }

      // If the main endpoint fails, try the test endpoint to see if API routes work at all
      console.log('Main endpoint failed, trying test endpoint...')
      const testApiUrl = process.env.NEXT_PUBLIC_BASE_URL
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/test`
        : 'http://localhost:3000/api/test'

      const testResponse = await fetch(testApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: true, originalData: data }),
      })

      console.log('Test endpoint response:', testResponse.status)

      if (testResponse.ok) {
        const testResult = await testResponse.json()
        console.log('Test endpoint success:', testResult)
        throw new Error('Main API failed but test API works. Check API route implementation.')
      } else {
        const errorText = await response.text()
        console.error('Original endpoint error response:', errorText)
        throw new Error('Failed to deposit funds - API routes may not be configured correctly')
      }
    } catch (fetchError) {
      console.error('Fetch error:', fetchError)
      throw fetchError
    }
  } catch (error) {
    console.error('Deposit request error:', error)
    throw error
  }
}

// React hook to use the deposit mutation
export const useDepositMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: depositToCircle,
    onSuccess: () => {
      // Invalidate relevant queries to trigger refetch
      queryClient.invalidateQueries({ queryKey: ['circles'] })
      queryClient.invalidateQueries({ queryKey: ['userCircles'] })
    },
  })
}
