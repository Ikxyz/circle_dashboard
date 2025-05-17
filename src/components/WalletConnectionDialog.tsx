'use client'

import { useEffect, useState } from 'react'
import { useActiveAccount } from 'thirdweb/react'
import ConnectWallet from './connectWallet'
import { Dialog } from './dialog'

export default function WalletConnectionDialog() {
     const activeAccount = useActiveAccount()
     const [isOpen, setIsOpen] = useState(false)

     // Check if wallet is connected
     useEffect(() => {
          if (!activeAccount) {
               setIsOpen(true)
          } else {
               setIsOpen(false)
          }
     }, [activeAccount])

     // If wallet is connected, don't render anything
     if (activeAccount) {
          return null
     }

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
               <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl dark:bg-zinc-800">
                    <h2 className="mb-4 text-2xl font-bold">Connect Your Wallet</h2>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                         You need to connect your wallet to access this application. This allows you to interact with circles, make deposits, and track your savings.
                    </p>
                    <div className="flex justify-center">
                         <ConnectWallet />
                    </div>
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                         This dialog cannot be dismissed. You must connect a wallet to proceed.
                    </p>
               </div>
          </div>
     )
}