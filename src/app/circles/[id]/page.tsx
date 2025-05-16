'use client'

import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { Heading, Subheading } from 'src/components/heading'
import { Link } from 'src/components/link'
import CircleDetails from './components/CircleDetails'
import { useActiveAccount } from 'thirdweb/react'

type CirclePageProps = {
  params: {
    id: string
  }
}

export default function CirclePage({ params }: CirclePageProps) {
  const activeAccount = useActiveAccount()
  const walletAddress = activeAccount?.address?.toString() || ''

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/circles" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Circles
        </Link>
      </div>

      {/* Use the CircleDetails component which uses React Query */}
      <CircleDetails id={params.id} address={walletAddress} />
    </>
  )
}
