'use client';

import {
     ThirdwebProvider,
     // metamaskWallet,
     // coinbaseWallet,
     // walletConnect, okxWallet, rainbowWallet, zerionWallet,
} from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";


export const ContractAddress = "0x5D263079F0b56493eAD02f3b89ff9DCa39e50F9d"
export const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
export const secretKey = process.env.THIRDWEB_SECRET_KEY;

export const thirdWebClient = createThirdwebClient({
     clientId: clientId,
} as any);

export default function WalletProvider({ children }: { children: React.ReactNode }) {
     return (
          <ThirdwebProvider
          // activeChain="base-sepolia-testnet"
          // clientId={clientId}
          // supportedChains={[BaseSepoliaTestnet]}
          // autoConnect={true}
          // supportedWallets={[
          //      metamaskWallet({
          //           recommended: true,
          //      }),
          //      coinbaseWallet(),
          //      walletConnect(), okxWallet(), rainbowWallet(), zerionWallet()
          // ]}
          >
               {children}
          </ThirdwebProvider>
     );
}
