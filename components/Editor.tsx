'use client'

import { EntryType } from './EntryCard'

const Editor = ({ entry }: EntryType) => {
  return <div>{entry.content}</div>
}

export default Editor
