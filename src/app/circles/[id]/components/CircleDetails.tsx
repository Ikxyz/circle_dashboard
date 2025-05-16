'use client'

import DepositFunds from '@/components/deposit/index';
import { useCircleDetailsPage, useCircleDetailsMutations } from '../http'
import { useState } from 'react'

export default function CircleDetails({ id, address }: { id: string; address: string }) {
     const { circle, leaderboard, user, isLoadingCircle } = useCircleDetailsPage(id, address)
     const { joinCircle, depositToCircle } = useCircleDetailsMutations()

     const [amount, setAmount] = useState<string>('')

     const handleJoin = async () => {
          if (!user || !circle) return

          try {
               await joinCircle.mutateAsync({
                    circleId: circle.id,
                    userId: user.id
               })
               // Show success message
          } catch (error) {
               console.error('Failed to join circle:', error)
          }
     }

     const handleDeposit = async () => {
          if (!user || !circle || !amount) return

          try {
               await depositToCircle.mutateAsync({
                    circleId: circle.id,
                    wallet: user.address,
                    amount: parseFloat(amount),
                    txHash: 'manual_deposit_' + Date.now() // Placeholder for manual deposits
               })
               setAmount('')
               // Show success message
          } catch (error) {
               console.error('Failed to deposit to circle:', error)
          }
     }

     if (isLoadingCircle) {
          return <div className="p-6 text-center">Loading circle details...</div>
     }

     if (!circle) {
          return <div className="p-6 text-center">Circle not found</div>
     }

     return (
          <div className="max-w-4xl mx-auto p-6">
               <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                         <div className="h-32 w-32 rounded-lg overflow-hidden mb-4 md:mb-0">
                              <img src={circle.image} alt={circle.name} className="h-full w-full object-cover" />
                         </div>
                         <div>
                              <h1 className="text-2xl font-bold mb-2">{circle.name}</h1>
                              <p className="text-gray-700 dark:text-gray-300 mb-4">{circle.description}</p>
                              <div className="flex space-x-6">
                                   <div>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">Members</span>
                                        <p className="font-semibold">{circle.noOfParticipants || 0}</p>
                                   </div>
                                   <div>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">Total Saved</span>
                                        <p className="font-semibold">${(circle.totalSaved || 0).toFixed(2)}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
                         <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>

                         {leaderboard.length === 0 ? (
                              <p className="text-center py-4">No members yet</p>
                         ) : (
                              <div className="space-y-4">
                                   {leaderboard.map((member, index: number) => (
                                        <div key={member.id} className="flex items-center space-x-4">
                                             <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-zinc-700 rounded-full">
                                                  <span className="font-medium">{index + 1}</span>
                                             </div>
                                             <div className="h-10 w-10 rounded-full overflow-hidden">
                                                  <img
                                                       src={member.user.avatar || `https://robohash.org/${member.user.address}.png`}
                                                       alt={member.user.name || member.user.address?.substring(0, 8)}
                                                       className="h-full w-full object-cover"
                                                  />
                                             </div>
                                             <div className="flex-1">
                                                  <p className="font-medium">
                                                       {member.user.name || member.user.address?.substring(0, 8)}
                                                  </p>
                                             </div>
                                             <div className="text-right">
                                                  <p className="font-semibold">${member.totalSaved.toFixed(2)}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         )}
                    </div>

                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
                         <h2 className="text-xl font-semibold mb-4">Join & Contribute</h2>

                         {user ? (
                              <>


                                   <DepositFunds
                                        circleId={circle.id}
                                        currency="ETH"
                                   />

                              </>
                         ) : (
                              <p className="text-center py-4">Please connect your wallet to join this circle</p>
                         )}
                    </div>
               </div>
          </div>
     )
}