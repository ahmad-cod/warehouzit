import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Toast from '@/components/ToastContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Warehouzit Signup App',
  description: 'Warehouzit registration page app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen transition-all duration-300`}>
        <Toast />
        {children}
      </body>
    </html>
  )
}
