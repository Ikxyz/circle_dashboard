'use client'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import type React from 'react'
import { ApplicationLayout } from './application-layout'
import { getEvents } from './data'
import WalletProvider from '@/providers/walletProvider'
import Providers from './providers'
import WalletRequiredProvider from '@/providers/WalletRequiredProvider'
import AutoAccountProvider from '@/providers/AutoAccountProvider'

// export const metadata: Metadata = {
//   title: {
//     template: '%s - Circles',
//     default: 'Circles on base',
//   },
//   description: '',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Define paths that are exempt from requiring wallet connection
  const exemptPaths = ['/learn', '/faq', '/about']

  return (
    <html
      lang="en"
      className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <WalletProvider>
          <Providers>
            <AutoAccountProvider>
              <WalletRequiredProvider exempt={exemptPaths}>
                <ApplicationLayout>{children}</ApplicationLayout>
              </WalletRequiredProvider>
            </AutoAccountProvider>
          </Providers>
        </WalletProvider>
      </body>
    </html>
  )
}
