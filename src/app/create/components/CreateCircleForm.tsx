'use client'

import { useCreatePage, useCreatePageMutations } from '../http'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'src/components/button'
import { Divider } from 'src/components/divider'
import { Heading, Subheading } from 'src/components/heading'
import { Input } from 'src/components/input'
import { Text } from 'src/components/text'
import { Textarea } from 'src/components/textarea'
import { Select } from 'src/components/select'
import { Checkbox, CheckboxField } from 'src/components/checkbox'
import { Label } from 'src/components/fieldset'

export default function CreateCircleForm({ address }: { address: string }) {
     const router = useRouter()
     const { user, isLoadingUser } = useCreatePage(address)
     const { createCircle } = useCreatePageMutations()

     const [name, setName] = useState('My Circle')
     const [description, setDescription] = useState('')
     const [image, setImage] = useState('')
     const [isPublic, setIsPublic] = useState(true)
     const [duration, setDuration] = useState('12')
     const [minDeposit, setMinDeposit] = useState('1')

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
          <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
               <Heading>Create a circle</Heading>
               <Divider className="my-10 mt-6" />

               <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                         <Subheading>Circle Name</Subheading>
                         <Text>Can be named after anything, Family, Organization etc</Text>
                    </div>
                    <div>
                         <Input
                              aria-label="Circle Name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                         />
                    </div>
               </section>

               <Divider className="my-10" soft />

               <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                         <Subheading>Short Description</Subheading>
                         <Text>This will be displayed on your circle public profile. Maximum 240 characters.</Text>
                    </div>
                    <div>
                         <Textarea
                              aria-label="Circle Description"
                              name="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                         />
                    </div>
               </section>

               <Divider className="my-10" soft />

               <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                         <Subheading>Circle type</Subheading>
                         <Text>Tick if you want your circle to be public</Text>
                    </div>
                    <div className="space-y-4">
                         <CheckboxField>
                              <Checkbox
                                   name="is_public"
                                   checked={isPublic}
                                   onChange={() => setIsPublic(!isPublic)}
                              />
                              <Label>Circle can be joined by anyone</Label>
                         </CheckboxField>
                    </div>
               </section>

               <Divider className="my-10" soft />

               <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                         <Subheading>Duration</Subheading>
                         <Text>Duration of the circle</Text>
                    </div>
                    <div>
                         <Select
                              aria-label="Duration"
                              name="duration"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                         >
                              <option value="12">1 year</option>
                              <option value="6">6 months</option>
                              <option value="3">3 months</option>
                         </Select>
                    </div>
               </section>

               <Divider className="my-10" soft />

               <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                         <Subheading>Min Deposit (USDT)</Subheading>
                         <Text>Min allowed to be deposited per member</Text>
                    </div>
                    <div>
                         <Input
                              aria-label="Min Deposit"
                              name="min_deposit"
                              type="number"
                              min="0.01"
                              step="0.01"
                              value={minDeposit}
                              onChange={(e) => setMinDeposit(e.target.value)}
                              required
                         />
                    </div>
               </section>

               <Divider className="my-10" soft />

               <div className="flex justify-end gap-4">
                    <Button
                         type="submit"
                         disabled={createCircle.isPending || !name.trim()}
                    >
                         {createCircle.isPending ? 'Creating...' : 'Create Circle'}
                    </Button>
               </div>
          </form>
     )
}