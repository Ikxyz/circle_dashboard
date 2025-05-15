import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'

export type Circle = {
  id: string
  name: string
  noOfParticipants?: number
  totalSaved?: number
  description: string
  category?: string
  image: string
  createdAt: string | number
  updatedAt: string | number
  creator: string
  isPrivate?: boolean
}

// Hook to get all circles
export const useCircles = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['circles', page, limit],
    queryFn: async (): Promise<Circle[]> => {
      const response = await fetch(`/api/circle?page=${page}&limit=${limit}`)
      if (!response.ok) {
        throw new Error('Failed to fetch circles')
      }
      return response.json()
    },
  })
}

// Hook to get a single circle
export const useCircle = (id?: string) => {
  return useQuery({
    queryKey: ['circle', id],
    queryFn: async (): Promise<Circle | null> => {
      if (!id) return null

      const response = await fetch(`/api/circle?id=${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch circle')
      }
      return response.json()
    },
    enabled: !!id,
  })
}

// Hook to create a new circle
export const useCreateCircle = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: async (circleData: {
      name: string
      description?: string
      image?: string
      creator: string
    }): Promise<Circle> => {
      const response = await fetch('/api/circle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(circleData),
      })

      if (!response.ok) {
        throw new Error('Failed to create circle')
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['circles'] })
    },
  })
}

// Hook to join a circle
export const useJoinCircle = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: async ({ circleId, userId }: { circleId: string; userId: string }) => {
      const response = await fetch('/api/circle', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ circleId, userId }),
      })

      if (!response.ok) {
        throw new Error('Failed to join circle')
      }

      return response.json()
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['circle', variables.circleId] })
      queryClient.invalidateQueries({ queryKey: ['userCircles', variables.userId] })
    },
  })
}

// Hook to deposit to a circle
export const useDepositToCircle = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: async ({ circleId, wallet, amount }: { circleId: string; wallet: string; amount: number }) => {
      const response = await fetch('/api/circle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ circleId, wallet, amount }),
      })

      if (!response.ok) {
        throw new Error('Failed to deposit to circle')
      }

      return response.json()
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['circle', variables.circleId] })
      queryClient.invalidateQueries({ queryKey: ['userCircles'] })
      queryClient.invalidateQueries({ queryKey: ['userTotalSavings'] })
      queryClient.invalidateQueries({ queryKey: ['leaderboard', variables.circleId] })
    },
  })
}

// Hook to get user circles
export const useUserCircles = (wallerId?: string, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['userCircles', wallerId, page, limit],
    queryFn: async (): Promise<Circle[]> => {
      if (!wallerId) return []

      const response = await fetch('/api/circle', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wallerId, page, limit }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user circles')
      }

      return response.json()
    },
    enabled: !!wallerId,
  })
}

// Hook to get trending circles
export const useTrendingCircles = () => {
  return useQuery({
    queryKey: ['trendingCircles'],
    queryFn: async (): Promise<Circle[]> => {
      const response = await fetch('/api/circle/trending')
      if (!response.ok) {
        throw new Error('Failed to fetch trending circles')
      }
      return response.json()
    },
  })
}

// Hook to get leaderboard
export const useLeaderboard = (circleId?: string) => {
  return useQuery({
    queryKey: ['leaderboard', circleId],
    queryFn: async () => {
      if (!circleId) return []

      const response = await fetch(`/api/circle/leaderboard?circleId=${circleId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard')
      }
      return response.json()
    },
    enabled: !!circleId,
  })
}
