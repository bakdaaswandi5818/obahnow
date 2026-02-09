import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Obahnow - Mendigitalkan Usaha dari Desa ke Kota',
  description: 'Kami membantu mendigitalkan usaha Anda, dari Company Profile hingga platform UMKM, dengan dukungan maintenance terbaik.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  )
}
