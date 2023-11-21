import type { Metadata } from 'next'
import './bootstrap.css'
import './globals.css'


export const metadata: Metadata = {
  title: 'Event Centrum',
  description: 'Recreation of a website design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="tw-font-arial container">{children}</body>
    </html>
  )
}
