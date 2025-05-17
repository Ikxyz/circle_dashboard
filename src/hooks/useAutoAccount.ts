'use client'

import { useEffect } from 'react'
import { useActiveAccount } from 'thirdweb/react'
import { useFindOrCreateUser } from './useAuth'

/**
 * Hook that automatically creates a user account when a wallet is connected
 * if one doesn't already exist in the database
 */
export function useAutoAccount() {
  const activeAccount = useActiveAccount()
  const walletAddress = activeAccount?.address?.toString()

  // Use the existing useFindOrCreateUser hook which will either find or create a user
  const {
    data: user,
    isLoading,
    error,
  } = useFindOrCreateUser(
    walletAddress,
    undefined, // Let the backend generate a default name
    undefined // Let the backend generate a default avatar
  )

  // Log results for debugging
  useEffect(() => {
    if (user) {
      console.log('User account ready:', user)
    }

    if (error) {
      console.error('Error with auto account creation:', error)
    }
  }, [user, error])

  return {
    user,
    isLoading,
    error,
    isConnected: !!walletAddress,
  }
}
