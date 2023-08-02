import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Tabs from './tabs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Warehouzit Next App',
  description: 'Warehouzit registration page app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen transition-all duration-300`}>
        <header className='flex items-center justify-between max-w-md bg-darkGreen p-4 text-white'>
          <h2>Hello, Welcome</h2>
          <Image
            src='/images/closeIcon.svg'
            alt='Close Icon'
            width={24}
            height={24}
          />
        </header>
        <Tabs />
        
        {children}
        <div className="max-w-sm px-8 pt-4 flex items-center before:border-t before:border-gray-300 before:flex-1 before:mr-2
          after:flex-1 after:border-t after:border-gray-300 after:ml-2">
          or continue with
        </div>
        <div className="flex items-center justify-center gap-x-6 max-w-md mt-2">
          <a href="#">
            <Image 
              src='/images/googleIcon.jpg'
              alt='Google Icon'
              width={25}
              height={25}
            />
          </a>
          <a href="#">
            <Image 
              src='/images/fbIcon.jpg'
              alt='Facebook Icon'
              width={24}
              height={24}
            />
          </a>

        </div>
      </body>
    </html>
  )
}
