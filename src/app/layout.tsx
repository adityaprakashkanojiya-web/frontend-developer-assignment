import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hedamo - Premium Product Showcase',
  description: 'Discover premium organic products with our innovative card-based showcase. Explore detailed information about each product aspect in a beautiful, modular design.',
  keywords: 'hedamo, organic, premium products, product showcase, card design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50">
          {children}
        </div>
      </body>
    </html>
  )
}
