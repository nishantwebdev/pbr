import React from 'react'
import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Pediatrics Board Review | PBR',
  description:
    'Pediatrics Board Review (PBR) offers streamlined, high-yield study resources and proven strategies to help pediatricians pass their board exams with confidence.',
  icons: {
    icon: '/images/pbr-logo.webp',
  },
  openGraph: {
    title: 'Pediatrics Board Review | PBR',
    description:
      'Pediatrics Board Review (PBR) offers streamlined, high-yield study resources and proven strategies to help pediatricians pass their board exams with confidence.',
    images: ['/images/aap-no-brainer-1.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#7f1aa6] selection:text-white">
        {children}
      </body>
    </html>
  )
}
