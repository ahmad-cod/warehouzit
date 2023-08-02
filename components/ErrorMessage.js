import Image from "next/image"

export default function ErrorMessage({ message }) {
  return (
    <div className="hidden peer-invalid:block">
      <p
        id="outlined_error_help"
        className="flex mt-2 text-xs text-red-600"
      >
        <Image 
        src='/images/error.svg'
        width={18}
        height={18}
        alt="error icon"
        />
        <span class="font-medium"> Oh, snapp! </span> Please {message}.
      </p>
    </div>
  )
}