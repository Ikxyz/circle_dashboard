import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'

type Profile = {
  name: string
  avatar: string
  wallet: string
  twitter: string | null
  discord: string | null
  currency: string
  createdAt: number
  updatedAt: number
  deletedAt: number | null
}

export const useAccount = (wallet?: string) => {
  return useQuery({
    queryKey: ['account', wallet],
    queryFn: async (): Promise<Profile | null> => {
      if (!wallet) return null

      const response = await fetch(`/api/account?wallet=${wallet}`)
      if (!response.ok) {
        throw new Error('Failed to fetch account')
      }
      return response.json()
    },
    enabled: !!wallet,
  })
}

export const useCreateAccount = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: async (wallet: string): Promise<Profile> => {
      const response = await fetch('/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wallet }),
      })

      if (!response.ok) {
        throw new Error('Failed to create account')
      }

      return response.json()
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['account', data.wallet] })
    },
  })
}

export const useUpdateAccount = (queryClient: QueryClient) => {
  return useMutation({
    mutationFn: async ({
      wallet,
      name,
      twitter,
      discord,
    }: {
      wallet: string
      name: string
      twitter: string
      discord: string
    }): Promise<Profile> => {
      const response = await fetch('/api/account', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wallet, name, twitter, discord }),
      })

      if (!response.ok) {
        throw new Error('Failed to update account')
      }

      return response.json()
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['account', data.wallet] })
    },
  })
}
