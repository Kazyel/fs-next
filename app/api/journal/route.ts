import { analyzeEntry } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const POST = async () => {
  const user = await getUserByClerkID({})
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about your day!',
    },
  })

  //----> WHEN I PAY OPEN AI TO USE THIS SHIT <------
  // const analysis = await analyzeEntry(entry.content)

  // if (analysis) {
  //   await prisma.analysis.create({
  //     data: {
  //       entryId: entry.id,
  //       ...analysis,
  //     },
  //   })
  // }

  revalidatePath('/journal')

  return NextResponse.json({ data: entry })
}
