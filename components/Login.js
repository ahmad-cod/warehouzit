import ErrorMessage from "./ErrorMessage"

export default function Login () {
  return (
    <form>
          {/* Email Address Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="email"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-darkGreen/80 border-gray-400 bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-500 peer-focus:text-darkGreen invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Email Address
              </label>
              <ErrorMessage message='enter your email address' />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="password"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-darkGreen/80 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-500 peer-focus:text-darkGreen invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Password
              </label>
              <ErrorMessage message='enter your password' />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="login-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="login-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Remember me
              </label>
            </div>
            <p>Forgot Password?</p>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-darkGreen text-white w-full py-3 rounded-[4px]"
            >
              Log in
            </button>
          </div>
        </form>
  )
}