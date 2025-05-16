'use client'

import ProfileDetails from './components/ProfileDetails'
import { useActiveAccount } from 'thirdweb/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const activeAccount = useActiveAccount()
  const walletAddress = activeAccount?.address?.toString() || ''
  const router = useRouter()

  // If no wallet is connected, redirect to home page
  useEffect(() => {
    if (!walletAddress) {
      router.push('/')
    }
  }, [walletAddress, router])

  if (!walletAddress) {
    return <div className="p-6 text-center">Please connect your wallet to view your profile</div>
  }

  return <ProfileDetails wallet={walletAddress} />
}
