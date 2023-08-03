import Image from "next/image"

export default function SocialAuthButtons () {
  return (
    <>
      <div className="max-w-md px-8 pt-4 flex items-center before:border-t before:border-gray-300 before:flex-1 before:mr-2
          after:flex-1 after:border-t after:border-gray-300 after:ml-2">
          or continue with
        </div>
        <div className="flex items-center justify-center gap-x-6 max-w-sm mt-2">
          <a href="#">
            <Image 
              loading="lazy"
              src='/images/googleIcon.jpg'
              alt='Google Icon'
              width={24}
              height={24}
            />
          </a>
          <a href="#">
            <Image 
              loading="lazy"
              src='/images/fbIcon.jpg'
              alt='Facebook Icon'
              width={24}
              height={24}
            />
          </a>

        </div>
    </>
  )
}