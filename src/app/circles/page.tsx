'use client'

import { useCircles } from '@/hooks'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CirclesPage() {
  const { data: circles, isLoading } = useCircles()

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Circles</h1>
        <div className="text-center py-12">Loading circles...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Circles</h1>

      {circles?.length === 0 ? (
        <div className="text-center py-12">
          <p className="mb-4">No circles found</p>
          <Link
            href="/create"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Create a Circle
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {circles?.map((circle) => (
            <Link
              key={circle.id}
              href={`/circles/${circle.id}`}
              className="block bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 rounded-t-lg overflow-hidden">
                <img
                  src={circle.image}
                  alt={circle.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{circle.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">{circle.description}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{circle.noOfParticipants || 0} members</span>
                  <span>{(circle.totalSaved || 0).toFixed(4)} ETH saved</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
