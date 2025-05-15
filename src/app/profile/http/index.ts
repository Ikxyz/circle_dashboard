'use client'

import { useAccount, useMutations, useUserCirclesFromApi, useUserTotalSavings } from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// Get user profile and associated data
export const useProfilePage = (wallet?: string, userId?: string) => {
  const accountQuery = useAccount(wallet)
  const userCirclesQuery = useUserCirclesFromApi(userId)
  const totalSavingsQuery = useUserTotalSavings(userId)

  return {
    profile: accountQuery.data,
    isLoadingProfile: accountQuery.isLoading,
    userCircles: userCirclesQuery.data || [],
    isLoadingCircles: userCirclesQuery.isLoading,
    totalSavings: totalSavingsQuery.data || 0,
    isLoadingTotalSavings: totalSavingsQuery.isLoading,
    isError: accountQuery.isError || userCirclesQuery.isError || totalSavingsQuery.isError,
    error: accountQuery.error || userCirclesQuery.error || totalSavingsQuery.error,
  }
}

// React hook to get profile mutations
export const useProfileMutations = () => {
  const queryClient = new QueryClient()
  const mutations = useMutations(queryClient)

  return {
    createAccount: mutations.createAccount,
    updateAccount: mutations.updateAccount,
  }
}
