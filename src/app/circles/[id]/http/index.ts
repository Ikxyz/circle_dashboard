'use client'

import { useCircle, useDepositToCircle, useFindOrCreateUser, useJoinCircle, useLeaderboard } from '@/hooks'
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

// Mutations that need the QueryClient
export const getCircleDetailsMutations = (queryClient: QueryClient) => {
  return {
    joinCircle: useJoinCircle(queryClient),
    depositToCircle: useDepositToCircle(queryClient),
  }
}
