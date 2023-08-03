import ErrorMessage from "./ErrorMessage"
import { useState } from "react";
import { postFormData } from "@/services/api";
import { toast } from "react-toastify";


export default function Register () {
  const [firstName, setFirstName] = useState(" ")
  const [lastName, setLastName] = useState(" ")
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const resetPasswordInput = () => {
    setPassword('')
    setPasswordConfirm('')
  }
  const resetAllInputs = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhoneNumber('')
    resetPasswordInput()
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if(!firstName || !lastName || !email || !phoneNumber || !password || !passwordConfirm) {
      toast.error('Missing Fields passed')
      resetPasswordInput()
      return;
    }

    if(password !== passwordConfirm) {
      setError('Password is not equal to the confirm password')
      resetPasswordInput()
      toast.error('Password is not equal to the confirm password')
      return;
    }

    const username = (`${firstName}.${lastName[0]}`).toLowerCase()

    const newUser = {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    }

    try {
      const response = await postFormData(newUser)
      resetAllInputs()
      if(response) {
        toast.success(response.message)
      }
      console.log('user', user)
    } catch (error) {
      resetPasswordInput()
      toast.error('An error occured')
      throw error
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="text"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
                required
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-800 invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                First Name
              </label>
              <ErrorMessage message='enter your first name' />
            </div>
          </div>
          {/* Last Name Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="text"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
                required
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-800 invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Last Name
              </label>
              <ErrorMessage message='enter your last name' />
            </div>
          </div>
          {/* Email Address Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="email"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
                // value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-800 invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Email Address
              </label>
              <ErrorMessage message='enter your email address' />
            </div>
          </div>
          {/* Phone Number Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="text"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
                value={phoneNumber}
                onChange={({ target }) => setPhoneNumber(target.value)}
                required
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-800 invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Phone Number
              </label>
              <ErrorMessage message='enter your number' />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="password"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-800 invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Password
              </label>
              <ErrorMessage message='enter your password' />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="password"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
                value={passwordConfirm}
                onChange={({ target }) => setPasswordConfirm(target.value)}
                required
              />
              <label
                htmlFor="outlined_error"
                className="absolute text-sm peer-focus:text-base text-gray-800 invalid:text-red-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-4"
              >
                Confirm Password
              </label>
              <ErrorMessage message='confirm your password' />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label
              htmlFor="agree-checkbox"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              I agreee to the terms and conditions
            </label>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-darkGreen text-white w-full py-3 rounded-[4px]"
            >
              Register
            </button>
          </div>
        </form>
  )
}