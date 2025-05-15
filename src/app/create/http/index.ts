'use client'

import { useFindOrCreateUser, useMutations } from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// For the create circle page, we mainly need the mutations
export const useCreatePage = (address?: string) => {
  // Make sure user exists before trying to create a circle
  const userQuery = useFindOrCreateUser(address)

  return {
    user: userQuery.data,
    isLoadingUser: userQuery.isLoading,
    isError: userQuery.isError,
    error: userQuery.error,
  }
}

// React hook to get create page mutations
export const useCreatePageMutations = () => {
  const queryClient = new QueryClient()
  const mutations = useMutations(queryClient)

  return {
    createCircle: mutations.createCircle,
  }
}
