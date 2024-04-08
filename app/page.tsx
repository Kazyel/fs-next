import Link from 'next/link'

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-screen bg-black flex-col justify-center
    items-center"
    >
      <div className="text-white max-w-[800px] w-full flex flex-col">
        <h1 className="text-[3.25rem] font-bold">
          The best Journal app, <span className="text-violet-500">period.</span>
        </h1>
        <p className="mt-6 border-l-2 border-violet-500 pl-4 text-xl font-light text-neutral-300">
          This is the best app for tracking your mood through your life.
          <span className="text-white/85">
            <br />
            All you have to do is to{' '}
            <span className="text-violet-300">be honest.</span>
          </span>
        </p>
        <div className="mt-14 justify-items-center">
          <Link href="/journal">
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
