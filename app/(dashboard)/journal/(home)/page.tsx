import Link from 'next/link'
import { analyze } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'

const getEntries = async () => {
  const user = await getUserByClerkID({})
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  // await analyze('O que é a vida?')
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <>
      <h2 className="text-4xl font-semibold mb-8">Your Journal</h2>
      <div className="grid grid-cols-3 gap-4 py-10">
        <NewEntryCard />

        {entries.map((entry) => (
          <Link key={entry.id} href={`/journal/${entry.id}`}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default JournalPage
