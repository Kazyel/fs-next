import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { ParamsType } from '@/utils/types'

const getEntry = async (id: string) => {
  const user = await getUserByClerkID({})
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  if (!entry) {
    throw new Error("This entry doesn't exist!")
  }

  return entry
}

const EntryPage = async ({ params }: ParamsType) => {
  const entry = await getEntry(params.id)

  const analysisData = [
    {
      name: 'Summary',
      value: entry.analysis?.summary,
    },
    {
      name: 'Subject',
      value: entry.analysis?.subject,
    },
    {
      name: 'Mood',
      value: entry.analysis?.mood,
    },
    {
      name: 'Negative',
      value: entry.analysis?.negative ? 'True' : 'False',
    },
  ]

  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div>
        <div
          style={
            entry.analysis?.color
              ? { backgroundColor: entry.analysis.color }
              : {}
          }
          className="rounded-tr px-4 py-5"
        >
          <h2 className="font-semibold text-xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                className="px-3 py-4 flex items-center justify-between border-b border-t border-r border-neutral-600/75"
                key={item.name}
              >
                <span className="font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EntryPage
