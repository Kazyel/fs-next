import { analyzeEntry } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { ParamsType } from '@/utils/types'
import { NextResponse } from 'next/server'

export const PATCH = async (request: Request, { params }: ParamsType) => {
  const { content } = await request.json()

  const user = await getUserByClerkID({})

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  })

  //----> WHEN I PAY OPEN AI TO USE THIS SHIT <------
  // const analysis = await analyzeEntry(updatedEntry.content);

  // await prisma.analysis.update({
  //   where: {
  //     entryId: updatedEntry.id,
  //   },
  //   data: {
  //     entryId: updatedEntry.id,
  //     ...analysis,
  //   },
  //   // update: analysis,
  // })

  return NextResponse.json({ data: updatedEntry })
}
