'use client'

import { useTrendingCircles, useUserProfile } from '@/hooks'
import { QueryClient, useQuery } from '@tanstack/react-query'

// Type definitions for KPI data
export type KpiData = {
  kpi: {
    circlesBalance: {
      value: number
      change: string
    }
    totalCircles: {
      value: number
      change: string
    }
    totalMembers: {
      value: number
      change: string
    }
    userTotalSaved: {
      value: number
      change: string
    }
  }
  leaderboard: Array<{
    rank: number
    userId: string
    username: string
    wallet: string
    avatar: string
    amountSaved: number
    joinedAt: string | Date
  }>
}

// Fetch KPI data from the API
const fetchKpiData = async (walletAddress?: string, timeframe: string = 'week'): Promise<KpiData> => {
  const params = new URLSearchParams()
  if (walletAddress) params.append('wallet', walletAddress)
  params.append('timeframe', timeframe)

  const response = await fetch(`/api/kpi?${params.toString()}`)
  if (!response.ok) {
    throw new Error('Failed to fetch KPI data')
  }
  return response.json()
}

// Hook to fetch KPI data
export const useKpiData = (walletAddress?: string, timeframe: string = 'week') => {
  return useQuery({
    queryKey: ['kpi', walletAddress, timeframe],
    queryFn: () => fetchKpiData(walletAddress, timeframe),
    enabled: true, // Always fetch KPI data
  })
}

// Export home page specific React Query hooks
export const useHomePage = (address?: string, timeframe: string = 'week') => {
  // Get trending circles for the home page
  const trendingCirclesQuery = useTrendingCircles()

  // Get user profile if the user is logged in
  const userProfileQuery = useUserProfile(address)

  // Get KPI data
  const kpiDataQuery = useKpiData(address, timeframe)

  return {
    trendingCircles: trendingCirclesQuery.data || [],
    isLoadingTrendingCircles: trendingCirclesQuery.isLoading,
    userProfile: userProfileQuery.data,
    isLoadingUserProfile: userProfileQuery.isLoading,
    kpiData: kpiDataQuery.data,
    isLoadingKpiData: kpiDataQuery.isLoading,
    isError: trendingCirclesQuery.isError || userProfileQuery.isError || kpiDataQuery.isError,
    error: trendingCirclesQuery.error || userProfileQuery.error || kpiDataQuery.error,
  }
}

// For mutations that need the QueryClient
export const getHomePageMutations = (queryClient: QueryClient) => {
  return {
    // Add any home page specific mutations here
  }
}
