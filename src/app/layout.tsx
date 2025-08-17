import type { Metadata } from 'next'

import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A modern photo gallery application.',
}

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="m-0 p-0">
      <main className="min-h-screen w-screen bg-linear-to-br from-[#005c97] to-[#2e4db5] p-2">
        {children}
      </main>
    </body>
  </html>
)

export default Layout
