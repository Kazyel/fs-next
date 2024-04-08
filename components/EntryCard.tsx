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
  const date = new Date(entry.updateAt).toLocaleString()

  return (
    <div className="text-black overflow-hidden rounded bg-white">
      <div className="px-4 pt-3 font-bold text-lg">
        {entry.analysis?.summary} Teste
      </div>
      <div className="px-4 py-3 text-sm font-light">
        {entry.analysis?.mood} {entry.content}
      </div>
      <div className="border-t px-4 py-3 text-end text-xs">
        <span className="font-semibold">Last updated at:</span> {date}
      </div>
    </div>
  )
}

export default EntryCard
