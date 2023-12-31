import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Toaster richColors  closeButton expand={false}/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
