import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-white/20"></aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] pl-4 border-b flex border-white/20">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh_-_60px)] p-10">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
