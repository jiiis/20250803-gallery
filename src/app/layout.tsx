import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery App',
  description: 'A modern photo gallery application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}