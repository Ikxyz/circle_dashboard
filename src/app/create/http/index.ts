'use client'

import { useCreateCircle, useFindOrCreateUser } from '@/hooks'
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

// Mutations that need the QueryClient
export const getCreatePageMutations = (queryClient: QueryClient) => {
  return {
    createCircle: useCreateCircle(queryClient),
  }
}
