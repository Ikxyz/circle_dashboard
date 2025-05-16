'use client'

import { useAccount, useMutations, useUserCirclesByWallet, useUserTotalSavingsByWallet } from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// Get user profile and associated data
export const useProfilePage = (wallet?: string) => {
  const accountQuery = useAccount(wallet)

  // Use wallet-based hooks to fetch user circles and total savings
  const userCirclesQuery = useUserCirclesByWallet(wallet)
  const totalSavingsQuery = useUserTotalSavingsByWallet(wallet)

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
