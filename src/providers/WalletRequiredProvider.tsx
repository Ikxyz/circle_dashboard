'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useActiveAccount } from 'thirdweb/react'
import WalletConnectionDialog from '@/components/WalletConnectionDialog'

type WalletRequiredProviderProps = {
     children: ReactNode
     exempt?: string[] // Array of paths that are exempt from requiring wallet connection
}

export default function WalletRequiredProvider({
     children,
     exempt = [] // Empty by default, no exempt paths
}: WalletRequiredProviderProps) {
     const activeAccount = useActiveAccount()
     const [isWalletRequired, setIsWalletRequired] = useState(false)

     useEffect(() => {
          // Check if current path is exempt
          const isExempt = exempt.some(path => window.location.pathname === path)
          setIsWalletRequired(!isExempt)
     }, [exempt])

     // If path is exempt or wallet is connected, render children normally
     if (!isWalletRequired || activeAccount) {
          return <>{children}</>
     }

     // Otherwise, render children with the wallet connection dialog overlay
     return (
          <>
               {children}
               <WalletConnectionDialog />
          </>
     )
}