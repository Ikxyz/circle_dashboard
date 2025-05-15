'use client'

import WalletProvider from '@/providers/walletProvider'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { Heading, Subheading } from 'src/components/heading'
import { Link } from 'src/components/link'
import CircleDetails from './components/CircleDetails'

export default function CircleDetailsPage({ params }: { params: { id: string } }) {
  // For simplicity, using a hardcoded address here
  // In a real app, you'd get this from your wallet provider
  const address = "example-wallet-address";

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/circles" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Circles
        </Link>
      </div>

      <WalletProvider>
        {/* Use the CircleDetails component which uses React Query */}
        <CircleDetails id={params.id} address={address} />
      </WalletProvider>
    </>
  )
}
