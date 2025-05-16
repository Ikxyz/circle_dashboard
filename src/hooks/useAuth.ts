import { useQuery } from '@tanstack/react-query'

type User = {
  id: string
  address: string
  name: string | null
  avatar: string | null
  createdAt: string
  updatedAt: string
  memberships: any[]
  createdCircles: any[]
}

export const useFindOrCreateUser = (address?: string, name?: string, avatar?: string) => {
  return useQuery({
    queryKey: ['user', address],
    queryFn: async (): Promise<User | null> => {
      if (!address) return null

      let url = `/api/auth?address=${address}`
      if (name) url += `&name=${encodeURIComponent(name)}`
      if (avatar) url += `&avatar=${encodeURIComponent(avatar)}`

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to find or create user')
      }
      return response.json()
    },
    enabled: !!address,
  })
}

export const useUserProfile = (address?: string) => {
  return useQuery({
    queryKey: ['userProfile', address],
    queryFn: async (): Promise<User | null> => {
      if (!address) return null

      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user profile')
      }
      return response.json()
    },
    enabled: !!address,
  })
}

export const useUserCircles = (userId?: string) => {
  return useQuery({
    queryKey: ['userCircles', userId],
    queryFn: async () => {
      if (!userId) return []

      const response = await fetch('/api/auth', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user circles')
      }
      return response.json()
    },
    enabled: !!userId,
  })
}

export const useUserTotalSavings = (userId?: string) => {
  return useQuery({
    queryKey: ['userTotalSavings', userId],
    queryFn: async () => {
      if (!userId) return 0

      const response = await fetch('/api/auth', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user total savings')
      }
      const data = await response.json()
      return data.totalSavings
    },
    enabled: !!userId,
  })
}

// Hooks that use wallet address directly instead of user ID

export const useUserCirclesByWallet = (wallet?: string) => {
  return useQuery({
    queryKey: ['userCirclesByWallet', wallet],
    queryFn: async () => {
      if (!wallet) return []

      // First get the user profile to get the ID
      const userResponse = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: wallet }),
      })

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user profile')
      }

      const user = await userResponse.json()
      if (!user || !user.id) {
        return []
      }

      // Then use the user ID to get the circles
      const circlesResponse = await fetch('/api/auth', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }),
      })

      if (!circlesResponse.ok) {
        throw new Error('Failed to fetch user circles')
      }

      return circlesResponse.json()
    },
    enabled: !!wallet,
  })
}

export const useUserTotalSavingsByWallet = (wallet?: string) => {
  return useQuery({
    queryKey: ['userTotalSavingsByWallet', wallet],
    queryFn: async () => {
      if (!wallet) return 0

      // First get the user profile to get the ID
      const userResponse = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: wallet }),
      })

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user profile')
      }

      const user = await userResponse.json()
      if (!user || !user.id) {
        return 0
      }

      // Then use the user ID to get the total savings
      const savingsResponse = await fetch('/api/auth', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }),
      })

      if (!savingsResponse.ok) {
        throw new Error('Failed to fetch user total savings')
      }

      const data = await savingsResponse.json()
      return data.totalSavings
    },
    enabled: !!wallet,
  })
}
