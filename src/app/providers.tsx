'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

type ProvidersProps = {
     children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
     const [queryClient] = useState(() => new QueryClient({
          defaultOptions: {
               queries: {
                    staleTime: 5 * 60 * 1000, // 5 minutes
                    refetchOnWindowFocus: false,
               },
          },
     }))

     return (
          <QueryClientProvider client={queryClient}>
               {children}
          </QueryClientProvider>
     )
}