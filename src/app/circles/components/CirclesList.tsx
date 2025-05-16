'use client'

import { useCirclesPage, useCircleMutations } from '../http'
import { useState } from 'react'
import Link from 'next/link'

export default function CirclesList() {
     const [page, setPage] = useState(1)
     const { circles, isLoading, isError } = useCirclesPage(page)
     const { joinCircle } = useCircleMutations()

     const handleJoinCircle = async (circleId: string, userId: string) => {
          try {
               await joinCircle.mutateAsync({ circleId, userId })
               // Show success message
          } catch (error) {
               // Handle error
               console.error('Failed to join circle:', error)
          }
     }

     if (isLoading) {
          return <div className="p-6 text-center">Loading circles...</div>
     }

     if (isError) {
          return <div className="p-6 text-center text-red-500">Error loading circles</div>
     }

     if (circles.length === 0) {
          return <div className="p-6 text-center">No circles found</div>
     }

     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
               {circles.map((circle) => (
                    <div
                         key={circle.id}
                         className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                         <Link href={`/circles/${circle.id}`} className="block">
                              <div className="flex items-center space-x-4">
                                   <div className="h-16 w-16 rounded-full overflow-hidden">
                                        <img src={circle.image} alt={circle.name} className="h-full w-full object-cover" />
                                   </div>
                                   <div>
                                        <h3 className="text-lg font-semibold">{circle.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                             Members: {circle.noOfParticipants || 0}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                             Total saved: {(circle.totalSaved || 0).toFixed(4)} ETH
                                        </p>
                                   </div>
                              </div>
                              <p className="mt-2 text-sm line-clamp-2">{circle.description}</p>
                         </Link>

                         <button
                              onClick={() => handleJoinCircle(circle.id, 'user-id-here')} // Replace with actual user ID
                              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                              disabled={joinCircle.isPending}
                         >
                              {joinCircle.isPending ? 'Joining...' : 'Join Circle'}
                         </button>
                    </div>
               ))}

               <div className="col-span-full flex justify-center space-x-4 mt-6">
                    <button
                         onClick={() => setPage(p => Math.max(p - 1, 1))}
                         disabled={page === 1 || isLoading}
                         className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-md disabled:opacity-50"
                    >
                         Previous
                    </button>
                    <span className="px-4 py-2">Page {page}</span>
                    <button
                         onClick={() => setPage(p => p + 1)}
                         disabled={circles.length < 10 || isLoading}
                         className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-md disabled:opacity-50"
                    >
                         Next
                    </button>
               </div>
          </div>
     )
}