import type { Metadata } from 'next'

import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A modern photo gallery application.',
}

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="m-0 p-0">
      <main className="m-2">{children}</main>
    </body>
  </html>
)

export default Layout
