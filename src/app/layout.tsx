import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/app/globals.css'

import { cn } from '../lib/utils'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'lxs',
  description: 'a symmetrical retail analytic dashboard',
  authors: [
    {
      name: "@lxs-app",
    },
  ],
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}>
          <ThemeProvider
            attribute='class' defaultTheme='light' themes={['light', 'dark']}
            enableSystem disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
