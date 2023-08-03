import Image from "next/image"

export default function SocialAuthButtons () {
  return (
    <>
      <div className="max-w-md px-8 pt-4 flex items-center before:border-t before:border-gray-300 before:flex-1 before:mr-2
          after:flex-1 after:border-t after:border-gray-300 after:ml-2">
          or continue with
        </div>
        <div className="flex items-center justify-center gap-1 gap-x-7 max-w-sm mt-4">
          <a 
            href="#"
            className="p-2.5 bg-gradient-to-b from-[#E8F8EC] to-[#FEF0C8] rounded-lg"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.68204 11.996C5.68204 11.2176 5.81131 10.4714 6.04204 9.77148L2.00349 6.6875C1.2164 8.28559 0.772949 10.0863 0.772949 11.996C0.772949 13.904 1.21586 15.7036 2.00186 17.3006L6.03822 14.2106C5.80968 13.514 5.68204 12.7705 5.68204 11.996Z" fill="#FBBC05"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7729 4.91775C14.4638 4.91775 15.9911 5.5169 17.1911 6.49733L20.682 3.01137C18.5547 1.15945 15.8274 0.015625 12.7729 0.015625C8.03069 0.015625 3.95505 2.72759 2.00342 6.69014L6.04196 9.77413C6.97251 6.94941 9.62505 4.91775 12.7729 4.91775Z" fill="#EB4335"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7729 19.0829C9.62505 19.0829 6.97251 17.0513 6.04196 14.2266L2.00342 17.31C3.95505 21.2731 8.03069 23.9851 12.7729 23.9851C15.6998 23.9851 18.4941 22.9458 20.5914 20.9986L16.758 18.035C15.6763 18.7164 14.3143 19.0829 12.7729 19.0829Z" fill="#34A853"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2275 11.999C24.2275 11.291 24.1184 10.5284 23.9548 9.82031H12.7729V14.4501H19.2093C18.8875 16.0286 18.0115 17.2421 16.758 18.0319L20.5915 20.9955C22.7946 18.9508 24.2275 15.9049 24.2275 11.999Z" fill="#4285F4"/>
          </svg>
          </a>
          <a 
            href="#"
            className="p-2.5 bg-gradient-to-b from-[#E8F8EC] to-[#FEF0C8] rounded-lg"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0462 24H1.55167C0.819887 24 0.227051 23.4068 0.227051 22.6753V1.32461C0.227051 0.592927 0.81998 0 1.55167 0H22.9025C23.634 0 24.2271 0.592927 24.2271 1.32461V22.6753C24.2271 23.4069 23.6339 24 22.9025 24H16.7867V14.7059H19.9063L20.3734 11.0838H16.7867V8.77132C16.7867 7.72265 17.0779 7.008 18.5817 7.008L20.4997 7.00716V3.76755C20.168 3.72341 19.0294 3.62479 17.7048 3.62479C14.9395 3.62479 13.0462 5.31276 13.0462 8.41261V11.0838H9.91861V14.7059H13.0462V24Z" fill="#4460A0"/>
          </svg>
          </a>

        </div>
    </>
  )
}