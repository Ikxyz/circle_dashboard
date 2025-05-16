'use client';

import { CONTRACT_ADDRESS, TEST_CHAIN_ID } from '@/app/config';
import { useWalletBalance, useActiveAccount, useSendTransaction, useActiveWallet } from 'thirdweb/react';
import { baseSepolia } from 'thirdweb/chains';
import { prepareTransaction, toWei } from 'thirdweb';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Button } from '../button';
import Drawer from '../drawer';
import { Input } from '../input';
import { thirdWebClient } from '@/providers/walletProvider';
import { useDepositMutation } from './http';

type DepositProps = {
     circleId: string
     currency?: "ETH" | "USDT" | "USDC",
     min?: number;
}

export default function DepositFunds({ circleId }: DepositProps) {
     const [isDepositOpen, setIsDepositOpen] = useState(false);
     const [error, setError] = useState<string | null>(null);
     const [isLoading, setIsLoading] = useState(false);
     const activeAccount = useActiveAccount();

     // React Query deposit mutation
     const { mutateAsync: depositToApi, isPending: isApiPending } = useDepositMutation();

     const { data: balance, isLoading: isLoadingBalance } = useWalletBalance({
          client: thirdWebClient,
          chain: baseSepolia,
          address: activeAccount?.address,
     });
     const activeWallet = useActiveWallet();

     useEffect(() => {
          activeWallet?.connect({ client: thirdWebClient })
     }, [activeWallet])

     const { mutateAsync: sendTx } = useSendTransaction();

     const openDeposit = () => {
          setIsDepositOpen(true);
          setError(null);
     }

     const onClose = () => {
          setIsDepositOpen(false);
          setError(null);
     }

     const confirmBalance = async () => {
          // For future USDT balance check implementation
     }

     const onDeposit = async (amount: string) => {
          try {
               setIsLoading(true);
               confirmBalance();

               const transaction = prepareTransaction({
                    to: "0xB9Cce561AeA6C55B9B491FEce390234137f272C9", // Replace with actual contract address
                    value: toWei(amount),
                    chain: baseSepolia,
                    client: thirdWebClient,
               });

               const tx = await sendTx(transaction);
               console.log("Deposit successful:", tx);

               if (!tx.transactionHash) {
                    throw new Error("No transaction hash returned");
               }

               return tx.transactionHash;
          } catch (err) {
               console.error("Transaction failed:", err);
               setError("Transaction failed. Please try again.");
               return null;
          } finally {
               setIsLoading(false);
          }
     }

     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null);

          const data = new FormData(e.target as HTMLFormElement);
          const amount = data.get('amountInETH') as string;

          if (!amount || !activeAccount) {
               setError("Please enter an amount and connect your wallet");
               return;
          }

          // Convert string to numbers for proper comparison
          const amountValue = parseFloat(amount);
          const balanceValue = balance?.value ? parseFloat(ethers.utils.formatEther(balance.value)) : 0;

          if (amountValue <= 0) {
               setError("Please enter a valid amount greater than 0");
               return;
          }

          if (amountValue > balanceValue) {
               setError("Insufficient balance in your wallet");
               return;
          }

          const txHash = await onDeposit(amount);
          if (txHash) {
               // Using React Query mutation instead of direct fetch
               await depositToApi({
                    circleId,
                    wallet: activeAccount.address.toString(),
                    amount: amountValue,
                    txHash
               });

               setIsDepositOpen(false);
          }
     }

     return (
          <div>
               <Button color='green' className='w-full' onClick={openDeposit}>Deposit</Button>

               <Drawer title='Deposit' isOpen={isDepositOpen} onClose={onClose}>
                    <form onSubmit={onSubmit}>
                         <h3>How much do you want to save</h3>

                         <div className="mt-2 mb-4">
                              <p className="text-sm text-gray-500">
                                   Your balance: {!isLoadingBalance && balance
                                        ? `${balance?.displayValue} ${balance?.symbol}`
                                        : "Loading..."}
                              </p>
                         </div>

                         <br />

                         <Input
                              name='amountInETH'
                              type='number'
                              aria-required
                              required
                              step="0.001"
                              min="0"
                              placeholder="Enter amount in ETH"
                         />

                         {error && (
                              <p className="text-red-500 text-sm mt-2">{error}</p>
                         )}

                         <br />

                         <Button isLoading={isLoading || isApiPending} type='submit'>
                              Proceed
                         </Button>
                    </form>
               </Drawer>
          </div>
     )
}