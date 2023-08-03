import Image from "next/image"

export default function ErrorMessage({ message }) {
  return (
    <p
      className="flex mt-2 mb-2 text-sm text-red-600"
    >
      <Image 
        loading="lazy"
        src='/images/error.svg'
        width={18}
        height={18}
        alt="error icon"
        className="mr-[6px]"
      />
      {message}.
    </p>
  )
}