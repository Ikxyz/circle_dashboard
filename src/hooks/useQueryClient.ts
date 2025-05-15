'use client'

import { useQueryClient as useReactQueryClient } from '@tanstack/react-query'

// Simple hook to get the QueryClient instance
export const useQueryClient = () => {
  return useReactQueryClient()
}
