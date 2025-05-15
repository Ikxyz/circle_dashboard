'use client'

import { useProfilePage, getProfileMutations } from '../http'
import { useQueryClient } from '@/hooks'
import { useState } from 'react'
import Link from 'next/link'

export default function ProfileDetails({ wallet }: { wallet: string }) {
     const { profile, userCircles, totalSavings, isLoadingProfile } = useProfilePage(wallet, 'user-id-here') // Replace with actual user ID
     const queryClient = useQueryClient()
     const { updateAccount } = getProfileMutations(queryClient)

     const [isEditing, setIsEditing] = useState(false)
     const [name, setName] = useState('')
     const [twitter, setTwitter] = useState('')
     const [discord, setDiscord] = useState('')

     // Initialize form when profile data is loaded
     const initForm = () => {
          if (profile) {
               setName(profile.name || '')
               setTwitter(profile.twitter || '')
               setDiscord(profile.discord || '')
          }
     }

     // Handle form submission
     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          if (!profile) return

          try {
               await updateAccount.mutateAsync({
                    wallet: profile.wallet,
                    name,
                    twitter,
                    discord
               })
               setIsEditing(false)
          } catch (error) {
               console.error('Failed to update profile:', error)
          }
     }

     if (isLoadingProfile) {
          return <div className="p-6 text-center">Loading profile...</div>
     }

     if (!profile) {
          return <div className="p-6 text-center">Profile not found</div>
     }

     return (
          <div className="max-w-4xl mx-auto p-6">
               <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center space-x-4 mb-6">
                         <div className="h-24 w-24 rounded-full overflow-hidden">
                              <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                         </div>
                         <div>
                              <h2 className="text-2xl font-bold">{profile.name}</h2>
                              <p className="text-gray-500 dark:text-gray-400">{profile.wallet}</p>
                         </div>
                    </div>

                    {!isEditing ? (
                         <div className="mb-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                   <div>
                                        <p className="text-gray-500 dark:text-gray-400">Twitter</p>
                                        <p>{profile.twitter || 'Not set'}</p>
                                   </div>
                                   <div>
                                        <p className="text-gray-500 dark:text-gray-400">Discord</p>
                                        <p>{profile.discord || 'Not set'}</p>
                                   </div>
                              </div>
                              <button
                                   onClick={() => {
                                        initForm()
                                        setIsEditing(true)
                                   }}
                                   className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                              >
                                   Edit Profile
                              </button>
                         </div>
                    ) : (
                         <form onSubmit={handleSubmit} className="mb-6">
                              <div className="grid grid-cols-1 gap-4">
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                        <input
                                             type="text"
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}
                                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700"
                                        />
                                   </div>
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Twitter</label>
                                        <input
                                             type="text"
                                             value={twitter}
                                             onChange={(e) => setTwitter(e.target.value)}
                                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700"
                                        />
                                   </div>
                                   <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Discord</label>
                                        <input
                                             type="text"
                                             value={discord}
                                             onChange={(e) => setDiscord(e.target.value)}
                                             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700"
                                        />
                                   </div>
                              </div>
                              <div className="flex space-x-4 mt-4">
                                   <button
                                        type="submit"
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                                        disabled={updateAccount.isPending}
                                   >
                                        {updateAccount.isPending ? 'Saving...' : 'Save Changes'}
                                   </button>
                                   <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 py-2 px-4 rounded-md transition-colors"
                                   >
                                        Cancel
                                   </button>
                              </div>
                         </form>
                    )}
               </div>

               <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">My Circles</h3>
                    <p className="text-lg mb-4">Total Saved: ${totalSavings.toFixed(2)}</p>

                    {userCircles.length === 0 ? (
                         <div className="text-center py-4">
                              <p>You haven't joined any circles yet.</p>
                              <Link
                                   href="/circles"
                                   className="inline-block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                              >
                                   Browse Circles
                              </Link>
                         </div>
                    ) : (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {userCircles.map((circle) => (
                                   <Link
                                        key={circle.id}
                                        href={`/circles/${circle.id}`}
                                        className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700"
                                   >
                                        <div className="h-12 w-12 rounded-full overflow-hidden">
                                             <img src={circle.image} alt={circle.name} className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                             <h4 className="font-medium">{circle.name}</h4>
                                             <p className="text-sm text-gray-500 dark:text-gray-400">
                                                  ${(circle.totalSaved || 0).toFixed(2)} saved
                                             </p>
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    )}
               </div>
          </div>
     )
}