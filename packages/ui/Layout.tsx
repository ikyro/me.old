import * as React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='font-04b03 flex min-h-screen flex-col items-center justify-center bg-black text-white'>
      {children}
    </main>
  )
}
