'use client'

import { useCircle, useCircles, useCreateCircle, useJoinCircle, useLeaderboard } from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// Get circles with pagination
export const useCirclesPage = (page = 1, limit = 10) => {
  const circlesQuery = useCircles(page, limit)

  return {
    circles: circlesQuery.data || [],
    isLoading: circlesQuery.isLoading,
    isError: circlesQuery.isError,
    error: circlesQuery.error,
    refetch: circlesQuery.refetch,
  }
}

// Get single circle by ID
export const useCircleDetails = (id?: string) => {
  const circleQuery = useCircle(id)
  const leaderboardQuery = useLeaderboard(id)

  return {
    circle: circleQuery.data,
    isLoadingCircle: circleQuery.isLoading,
    leaderboard: leaderboardQuery.data || [],
    isLoadingLeaderboard: leaderboardQuery.isLoading,
    isError: circleQuery.isError || leaderboardQuery.isError,
    error: circleQuery.error || leaderboardQuery.error,
  }
}

// Mutations that need the QueryClient
export const getCirclesMutations = (queryClient: QueryClient) => {
  return {
    createCircle: useCreateCircle(queryClient),
    joinCircle: useJoinCircle(queryClient),
  }
}
