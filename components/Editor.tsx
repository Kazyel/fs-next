'use client'

import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import { updateEntry } from '@/utils/api'
import { EntryType } from './EntryCard'

const Editor = ({ entry }: EntryType) => {
  const [textContent, setTextContent] = useState(entry.content)
  const [isSaving, setIsSaving] = useState(false)

  useAutosave({
    data: textContent,
    onSave: async (_value) => {
      setIsSaving(true)
      const updated = await updateEntry(entry.id, _value)
      setIsSaving(false)
    },
    interval: 2000,
  })

  return (
    <div className="w-full h-full relative">
      <textarea
        className="w-full h-full p-8 text-lg border rounded border-neutral-600/75 resize-none bg-black outline-none focus:border-neutral-500/85"
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />
      {isSaving ? (
        <div className="text-neutral-400 mt-4 py-4 px-6 absolute bottom-0">
          Saving...
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Editor
