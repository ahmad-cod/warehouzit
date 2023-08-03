import Image from "next/image"

export default function Header () {
  return (
    <header className='sticky top-0 z-20 flex items-center justify-between w-full max-w-md bg-darkGreen p-4 text-white'>
      <h2>Hello, Welcome</h2>
      <Image
        loading="lazy"
        src='/images/closeIcon.svg'
        alt='Close Icon'
        width={24}
        height={24}
      />
    </header>
  )
}