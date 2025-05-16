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
  const response = await fetch('/api/circle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to deposit funds')
  }

  return response.json()
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
