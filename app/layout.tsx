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
      
      <head className=' m-24 rounded-md md:flex md:justify-center'>
        <NavMenu />
      </head>
      
      <div className='particle'>
        <DefaultBackground />
      </div>

      <body className='m-24 rounded-md md:flex md:justify-center'>
        {children}
      </body>

    </html>
  )
}
