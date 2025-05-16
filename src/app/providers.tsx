'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

// Use more specific type for children
type ProvidersProps = {
     children: JSX.Element | JSX.Element[] | string | number | boolean | null | undefined
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