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
      className="cursor-pointer max-h-[128px] min-w-[250px] overflow-hidden rounded-lg bg-violet-600"
      onClick={handleOnClick}
    >
      <div className="p-4">
        <span className="text-2xl font-medium text-white">New Entry</span>
      </div>
    </div>
  )
}

export default NewEntryCard
