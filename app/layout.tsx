import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavMenu } from '@/components/navbar'
import { DefaultBackground } from '@/components/background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MylesBolton.com Homepage',
  description: 'Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <div>
        <DefaultBackground />
      </div>
      <body>
        <header className="md:container md:mx-auto">
          <nav className=' m-12 rounded-md flex justify-center'>
            <NavMenu />
          </nav>
        </header>
        <div className="md:container md:mx-auto">
          {children}
        </div>
      </body>

    </html>
  )
}
