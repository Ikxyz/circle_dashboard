'use client'

import { useAutoAccount } from '@/hooks'
import { ReactNode } from 'react'

type AutoAccountProviderProps = {
     children: ReactNode
}

/**
 * Provider that automatically creates a user account in the database
 * when a wallet is connected, if an account doesn't already exist
 */
export default function AutoAccountProvider({ children }: AutoAccountProviderProps) {
     // Use the hook to automatically handle account creation
     // This will run whenever a wallet is connected
     useAutoAccount()

     // Just render children - the hook handles all the logic
     return <>{children}</>
}