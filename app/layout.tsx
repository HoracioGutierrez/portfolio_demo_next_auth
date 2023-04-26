import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Header from './layout/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
          <Header/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
