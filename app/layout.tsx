import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Header from './layout/Header';
import Link from 'next/link';
import CustomToastContainer from './layout/CustomToastContainer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HG - Portfolio',
  description: 'Horacio Gutierrez - Pagina de portfolio personal del programador fullstack Horacio Gutierrez',
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
          <div className='drawer'>
            <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <Header />
              <main className="flex flex-col flex-grow flex-1 p-2 md:p-3 lg:p-4">
                {children}
              </main>
            </div>
            <div className="drawer-side">
              <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
              <ul className='menu p-4 w-80 bg-base-100'>
                <li>
                  <Link href="/demos" className=""> demos </Link>
                </li>
                <li>
                <Link href="/opiniones" className=""> opiniones </Link>
                </li>
                <li>
                <Link href="/dashboard" className=""> dashboard </Link>
                </li>
              </ul>
            </div>
          </div>
          <CustomToastContainer/>
        </body>
      </html>
    </ClerkProvider>
  )
}
