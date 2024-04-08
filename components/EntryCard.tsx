export type EntryType = {
  entry: {
    id: string
    createdAt: Date
    updateAt: Date
    content: string
    userId: string
    analysis?: {
      summary: string
      mood: string
    }
  }
}

const EntryCard = ({ entry }: EntryType) => {
  const date = new Date(entry.createdAt).toLocaleString()

  return (
    <div className="text-black divide-y divide-gray-200 overflow-hidden rounded bg-white">
      <div className="px-4 py-3">{entry.analysis?.summary} Teste</div>
      <div className="px-4 py-3">
        {entry.analysis?.mood} Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </div>
      <div className="px-4 py-3 text-end text-sm">{date}</div>
    </div>
  )
}

export default EntryCard
