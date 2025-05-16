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
    // Using our new endpoint specifically for deposits
    const apiUrl = process.env.NEXT_PUBLIC_BASE_URL
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/circle-deposit`
      : 'http://localhost:3000/api/circle-deposit'

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
      } else {
        const errorText = await response.text()
        console.error('Deposit error response:', errorText)
        throw new Error('Failed to deposit funds')
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
