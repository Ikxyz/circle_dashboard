'use client'

import {
  useCreateAccount as useCreateAccountHook,
  useCreateCircle as useCreateCircleHook,
  useDepositToCircle as useDepositToCircleHook,
  useJoinCircle as useJoinCircleHook,
  useUpdateAccount as useUpdateAccountHook,
} from '@/hooks'
import { QueryClient } from '@tanstack/react-query'

// Custom hook for creating a React hook function that returns mutations
// This is to fix the React Hook lint errors when using hooks in non-hook functions
export function useMutations(queryClient: QueryClient) {
  // Account mutations
  const createAccount = useCreateAccountHook(queryClient)
  const updateAccount = useUpdateAccountHook(queryClient)

  // Circle mutations
  const createCircle = useCreateCircleHook(queryClient)
  const joinCircle = useJoinCircleHook(queryClient)
  const depositToCircle = useDepositToCircleHook(queryClient)

  return {
    // Account mutations
    createAccount,
    updateAccount,

    // Circle mutations
    createCircle,
    joinCircle,
    depositToCircle,
  }
}
