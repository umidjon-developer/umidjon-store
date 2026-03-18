import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umidjon Gafforov | Full Stack & Mobile Developer',
  description: 'Premium web and mobile development services. React, Next.js, React Native expert based in Tashkent, Uzbekistan. 3+ years experience, 50+ projects delivered.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
