import Image from "next/image"

export default function ErrorMessage({ message }) {
  return (
    <div className="hidden peer-invalid:block">
      <p
        className="flex mt-2 text-xs text-red-600"
      >
        <Image 
          loading="lazy"
          src='/images/error.svg'
          width={18}
          height={18}
          alt="error icon"
        />
        <span className="font-medium"> Oh, snapp! </span> Please {message}.
      </p>
    </div>
  )
}