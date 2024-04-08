import { auth } from '@clerk/nextjs'
import { prisma } from './db'

type UserOptions = {
  select?: {}
  includes?: {}
}

type FindOptions = {
  where: {
    clerkId: string
  }
  select?: undefined | Object
  include?: undefined | Object
}

export const getUserByClerkID = async ({ select, includes }: UserOptions) => {
  const { userId } = await auth()

  const options: FindOptions = {
    where: {
      clerkId: userId as string,
    },
  }

  select ? (options['select'] = select) : null
  includes ? (options['include'] = select) : null

  const user = await prisma.user.findUniqueOrThrow(options)

  return user
}
