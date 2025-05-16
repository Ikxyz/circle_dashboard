'use client'

import { thirdWebClient } from "@/providers/walletProvider";
import { baseSepolia } from "thirdweb/chains";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";

export default function App() {
     const account = useActiveAccount();
     const { data: balance, isLoading } = useWalletBalance({
          client: thirdWebClient,
          chain: baseSepolia,
          address: account?.address,
     });

     return (
          <div>
               <p>Wallet address: {account?.address || 'Not connected'}</p>
               <p>
                    Wallet balance: {balance?.displayValue || '0'} {balance?.symbol || 'ETH'}
               </p>
          </div>
     );
}
