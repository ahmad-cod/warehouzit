import Image from 'next/image'
import Tabs from './tabs'
import Header from '@/components/Header'
import SocialAuthButtons from '@/components/SocialAuthButtons'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 pt-0 px-0">
      <div className="z-10 w-full items-center justify-between text-sm sm:flex flex-col">
        <Header />
        <Tabs />
        <SocialAuthButtons />
      </div>
    </main>
  )
}
