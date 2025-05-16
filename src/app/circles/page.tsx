'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { Button } from 'src/components/button'
import { Heading } from 'src/components/heading'
import { Input, InputGroup } from 'src/components/input'
import { Link } from 'src/components/link'
import { Select } from 'src/components/select'
import CirclesList from './components/CirclesList'

export default function CirclesPage() {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Circles</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search circles&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sort by joined</option>
                <option value="date">Sort by trending</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <Link href="/create">
          <Button>Create Circle</Button>
        </Link>
      </div>

      {/* Use the CirclesList component which uses React Query */}
      <CirclesList />
    </>
  )
}
