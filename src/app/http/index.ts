'use client'

import { useTrendingCircles, useUserProfile } from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// Export home page specific React Query hooks
export const useHomePage = (address?: string) => {
  // Get trending circles for the home page
  const trendingCirclesQuery = useTrendingCircles()

  // Get user profile if the user is logged in
  const userProfileQuery = useUserProfile(address)

  return {
    trendingCircles: trendingCirclesQuery.data || [],
    isLoadingTrendingCircles: trendingCirclesQuery.isLoading,
    userProfile: userProfileQuery.data,
    isLoadingUserProfile: userProfileQuery.isLoading,
    isError: trendingCirclesQuery.isError || userProfileQuery.isError,
    error: trendingCirclesQuery.error || userProfileQuery.error,
  }
}

// For mutations that need the QueryClient
export const getHomePageMutations = (queryClient: QueryClient) => {
  return {
    // Add any home page specific mutations here
  }
}
