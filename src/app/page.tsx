import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Gallery App</h1>
      <p>
        <Link href="/gallery" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          View Gallery
        </Link>
      </p>
    </main>
  )
}