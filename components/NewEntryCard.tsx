'use client'

import { createNewEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const NewEntryCard = () => {
  const router = useRouter()

  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-white"
      onClick={handleOnClick}
    >
      <div className="p-4">
        <span className="text-2xl font-medium text-black">New Entry</span>
      </div>
    </div>
  )
}

export default NewEntryCard
