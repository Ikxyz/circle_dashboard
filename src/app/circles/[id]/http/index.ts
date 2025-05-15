'use client'

import { useCircle, useFindOrCreateUser, useLeaderboard, useMutations } from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// Get circle details by ID
export const useCircleDetailsPage = (id?: string, address?: string) => {
  const circleQuery = useCircle(id)
  const leaderboardQuery = useLeaderboard(id)
  const userQuery = useFindOrCreateUser(address)

  return {
    circle: circleQuery.data,
    isLoadingCircle: circleQuery.isLoading,
    leaderboard: leaderboardQuery.data || [],
    isLoadingLeaderboard: leaderboardQuery.isLoading,
    user: userQuery.data,
    isLoadingUser: userQuery.isLoading,
    isError: circleQuery.isError || leaderboardQuery.isError || userQuery.isError,
    error: circleQuery.error || leaderboardQuery.error || userQuery.error,
  }
}

// React hook to get circle details mutations
export const useCircleDetailsMutations = () => {
  const queryClient = new QueryClient()
  const mutations = useMutations(queryClient)

  return {
    joinCircle: mutations.joinCircle,
    depositToCircle: mutations.depositToCircle,
  }
}
