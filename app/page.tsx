import { auth, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <main
      className="flex min-h-screen w-screen flex-col justify-center
    items-center"
    >
      <div className="flex flex-col">
        <h1 className="text-[3.5rem] font-bold">
          The best Journal app, <span className="text-violet-500">period.</span>
        </h1>
        <p className="mt-6 border-l-2 border-violet-500 pl-4 text-xl font-light text-neutral-300/60">
          This is the best app for tracking your mood through your life.
          <span className="text-neutral-300/60">
            <br />
            All you have to do is to{' '}
            <span className="text-violet-300/60">be honest.</span>
          </span>
        </p>
        <div className="mt-14 justify-items-center">
          <Link href={href}>
            <button
              className="
            py-3 px-4 text-xl font-light border-neutral-600/75 border rounded
            hover:border-neutral-400 transition-all duration-200
            "
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
