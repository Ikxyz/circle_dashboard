'use client'

import { useCircle, useCircles, useLeaderboard, useMutations } from '@/hooks'
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

// React hook to get circle mutations
export const useCircleMutations = () => {
  const queryClient = new QueryClient()
  const mutations = useMutations(queryClient)

  return {
    createCircle: mutations.createCircle,
    joinCircle: mutations.joinCircle,
  }
}
