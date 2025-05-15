'use client';

import { CONTRACT_ADDRESS, TEST_CHAIN_ID } from '@/app/config';
import { useWalletBalance, useActiveAccount, useSendTransaction } from 'thirdweb/react';
import { prepareTransaction, toWei } from 'thirdweb';
import { ethers } from 'ethers';
import { ChangeEvent, useState } from 'react';
import { Button } from './button';
import Drawer from './drawer';
import { Input } from './input';
import { allowance } from "thirdweb/extensions/erc20";
import { thirdWebClient } from '@/providers/walletProvider';
import { BaseSepoliaTestnet } from '@thirdweb-dev/chains';

type DepositProps = {
     circleId: string
     currency?: "ETH" | "USDT" | "USDC",
     min?: number;
}

export default function DepositFunds({ circleId }: DepositProps) {
     const [amountInETH, setAmountInETH] = useState<string>("");
     const [isDepositOpen, setIsDepositOpen] = useState(false);
     const [error, setError] = useState<string | null>(null);
     const [isLoading, setIsLoading] = useState(false);
     const account = useActiveAccount();

     const balance = useWalletBalance({
          client: thirdWebClient,
          chain: BaseSepoliaTestnet as any,
          address: account?.address,
     });

     const { mutateAsync: sendTx, data: transactionResult } =
          useSendTransaction();

     const openDeposit = () => {
          setIsDepositOpen(true);
          setError(null);
     }

     const onClose = () => {
          setIsDepositOpen(false);
          setError(null);
     }

     const getUsdtPayable = (amount: string) => {
          return ethers.utils.parseUnits(amount, 6);
     }

     const confirmBalance = async () => {
          // if (!signer) return;
          // const contract: any = await getUSDTContract();
          // const userBalance = await contract?.balanceOf(signer.getAddress());
          // console.log({ userBalance })
     }

     const onDeposit = async (amount: string) => {
          try {
               setIsLoading(true);
               confirmBalance();

               const amountToDeposit = ethers.utils.parseEther(amount);

               const transaction = prepareTransaction({
                    to: "0x...", // Replace with actual contract address
                    value: toWei(amount), // Use the actual amount instead of hardcoded value
                    chain: BaseSepoliaTestnet as any,
                    client: thirdWebClient,
               });

               const tx = await sendTx(transaction);
               console.log("Deposit successful:", tx);

               setIsDepositOpen(false);
               return true;
          } catch (err) {
               console.error("Transaction failed:", err);
               setError("Transaction failed. Please try again.");
               return false;
          } finally {
               setIsLoading(false);
          }
     }

     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null);

          const data = new FormData(e.target as HTMLFormElement);
          const amount = data.get('amountInETH') as string;

          if (!amount || !account) {
               setError("Please enter an amount and connect your wallet");
               return;
          }

          // Convert string to numbers for proper comparison
          const amountValue = parseFloat(amount);
          const balanceValue = balance.data?.value ? parseFloat(ethers.utils.formatEther(balance.data.value)) : 0;

          if (amountValue <= 0) {
               setError("Please enter a valid amount greater than 0");
               return;
          }

          if (amountValue > balanceValue) {
               setError("Insufficient balance in your wallet");
               return;
          }

          const success = await onDeposit(amount);
          if (success) {
               // Consider saving to API only if deposit was successful
               await saveToAPi({
                    circleId,
                    wallet: account.address,
                    amount: amountValue
               });
          }
     }

     const saveToAPi = async (body: any) => {
          try {
               console.log({ body })
               const res = await fetch('/api/circle', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
               });

               const data = await res.json();
               console.log(data.message);
          } catch (error) {
               console.error('Error saving to API:', error);
          }
     }

     return (
          <div>
               <Button onClick={openDeposit}>Deposit to start saving</Button>

               <Drawer title='Deposit' isOpen={isDepositOpen} onClose={onClose}>
                    <form onSubmit={onSubmit}>
                         <h3>How much do you want to save</h3>

                         <div className="mt-2 mb-4">
                              <p className="text-sm text-gray-500">
                                   Your balance: {balance.data?.value
                                        ? `${parseFloat(ethers.utils.formatEther(balance.data.value)).toFixed(4)} ETH`
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

                         <Button isLoading={isLoading} type='submit'>
                              Proceed
                         </Button>
                    </form>
               </Drawer>
          </div>
     )
}
