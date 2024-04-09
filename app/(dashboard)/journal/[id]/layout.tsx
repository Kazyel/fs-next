import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-white/20"></aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] pl-4 border-b flex border-white/20">
          <div className="w-full flex items-center">
            <Link href="/journal" className="flex group gap-2 pl-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover:-translate-x-1 transition-all duration-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              Back to Journal
            </Link>
          </div>
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh_-_60px)] p-10">{children}</div>
      </div>
    </div>
  )
}

export default Layout
