'use client'

import WalletProvider from '@/providers/walletProvider'
import ProfileDetails from './components/ProfileDetails'
import { useAccount } from '@/hooks'

export default function ProfilePage() {
  // In a real app, you would get the wallet address from your wallet provider
  // For this example, we'll hardcode a wallet address
  const wallet = "example-wallet-address";

  return (
    <WalletProvider>
      {/* Use the ProfileDetails component which uses React Query */}
      <ProfileDetails wallet={wallet} />
    </WalletProvider>
  )
}
