'use client'

import { useCreatePage, getCreatePageMutations } from '../http'
import { useQueryClient } from '@/hooks'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateCircleForm({ address }: { address: string }) {
     const router = useRouter()
     const { user, isLoadingUser } = useCreatePage(address)
     const queryClient = useQueryClient()
     const { createCircle } = getCreatePageMutations(queryClient)

     const [name, setName] = useState('')
     const [description, setDescription] = useState('')
     const [image, setImage] = useState('')

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          if (!user) return

          try {
               const newCircle = await createCircle.mutateAsync({
                    name,
                    description,
                    image,
                    creator: user.id
               })

               // Navigate to the new circle page
               router.push(`/circles/${newCircle.id}`)
          } catch (error) {
               console.error('Failed to create circle:', error)
          }
     }

     if (isLoadingUser) {
          return <div className="p-6 text-center">Loading...</div>
     }

     if (!user) {
          return <div className="p-6 text-center">Please connect your wallet to create a circle</div>
     }

     return (
          <div className="max-w-2xl mx-auto p-6">
               <h1 className="text-2xl font-bold mb-6">Create a New Circle</h1>

               <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
                    <div className="mb-4">
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Circle Name*
                         </label>
                         <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700"
                              placeholder="Enter circle name"
                         />
                    </div>

                    <div className="mb-4">
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Description
                         </label>
                         <textarea
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              rows={4}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700"
                              placeholder="Describe your circle (purpose, goals, etc.)"
                         />
                    </div>

                    <div className="mb-6">
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Image URL
                         </label>
                         <input
                              type="url"
                              value={image}
                              onChange={(e) => setImage(e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700"
                              placeholder="https://example.com/image.jpg"
                         />
                         <p className="text-xs text-gray-500 mt-1">Leave empty to use a default image</p>
                    </div>

                    <div className="flex justify-end">
                         <button
                              type="button"
                              onClick={() => router.back()}
                              className="mr-4 bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 py-2 px-4 rounded-md transition-colors"
                         >
                              Cancel
                         </button>
                         <button
                              type="submit"
                              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
                              disabled={createCircle.isPending || !name.trim()}
                         >
                              {createCircle.isPending ? 'Creating...' : 'Create Circle'}
                         </button>
                    </div>
               </form>
          </div>
     )
}