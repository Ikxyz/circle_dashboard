'use client'

import ProfileDetails from './components/ProfileDetails'
import { useAccount } from '@/hooks'

export default function ProfilePage() {
  // In a real app, you would get the wallet address from your wallet provider
  // For this example, we'll hardcode a wallet address
  const wallet = "example-wallet-address";

  return (
    <ProfileDetails wallet={wallet} />
  )
}
