import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

type ParamsType = {
  params: {
    id: string
  }
}

const getEntry = async (id: string) => {
  const user = await getUserByClerkID({})
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  })

  if (!entry) {
    throw new Error("This entry doesn't exist!")
  }

  return entry
}

const EntryPage = async ({ params }: ParamsType) => {
  const entry = await getEntry(params.id)

  return (
    <div>
      <Editor entry={entry} />
    </div>
  )
}

export default EntryPage
