import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de tutoriais',
  description: 'Lista de tutoriais'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {/* <div className='min-h-full'>
          <header className='bg-gray-800'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                Tutorials
              </div>
            </div>
          </header>
        </div> */}
          {children}
      </body>
    </html>
  )
}
