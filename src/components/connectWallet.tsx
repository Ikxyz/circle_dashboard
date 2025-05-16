'use client';

import { ContractAddress, thirdWebClient } from "@/providers/walletProvider";
import {
     ConnectButton
} from "thirdweb/react";



export default function ConnectWallet() {



     return (

          <ConnectButton client={thirdWebClient} />

     );
}
