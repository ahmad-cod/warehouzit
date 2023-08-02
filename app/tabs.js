"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="max-w-sm mx-8 overflow-hidden">
      <div class="mb-4 border-b border-gray-200 flex items-center gap-4 gap-x-6 mt-4 max-w-md py-4 pb-2 relative transition-all duration-500">
        <div
          className={
            activeTab === 1
              ? "text-darkGreen before:absolute before:h-1 before:top-[45px] before:left-0 before:w-[50px] before:bg-darkGreen transition duration-300"
              : "text-gray-300 transition duration-300"
          }
          onClick={() => toggleTab(1)}
        >
          Login
        </div>
        <div
          className={
            activeTab === 2
              ? "text-darkGreen before:absolute before:h-1 before:top-[45px] before:left-[65px] before:w-[70px] before:bg-darkGreen transition before:transition duration-300 before:duration-700"
              : "text-gray-300"
          }
          onClick={() => toggleTab(2)}
        >
          Register
        </div>
      </div>

      <div className="user-tabs flex justify-between w-full">
        <div className="flex items-center gap-3 text-[14px] bg-grayish text-[#BABEC3] py-2 px-3 sm:px-6 rounded-[4px]">
          <Image
            src="/images/spaceSeekers.jpg"
            alt="Space Seekers Icon"
            width={24}
            height={24}
          />
          Space Seeker
        </div>
        <div className="flex items-center gap-3 bg-darkGreen text-white text-[14px] py-2 px-3 sm:px-6 rounded-[4px]">
          <Image
            src="/images/spaceOwnersIcon.svg"
            alt="Space Owner Icon"
            width={19.5}
            height={16.57}
          />
          Space Owner
        </div>
      </div>

      <section className={activeTab === 1 ? "block mt-8" : "hidden"}>
        <form>
          {/* Email Address Input */}
          <div>
            <div class="relative mb-4">
              <input
                type="email"
                id="outlined_error"
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
            <div class="relative mb-4">
              <input
                type="password"
                id="outlined_error"
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
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="link-checkbox"
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
      </section>

      <section className={activeTab === 2 ? "block mt-4" : "hidden"}>
        <form>
          {/* First Name Input */}
          <div>
            <div class="relative mb-4">
              <input
                type="text"
                id="outlined_error"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
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
            <div class="relative mb-4">
              <input
                type="text"
                id="outlined_error"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
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
            <div class="relative mb-4">
              <input
                type="email"
                id="outlined_error"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
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
            <div class="relative mb-4">
              <input
                type="text"
                id="outlined_error"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
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
            <div class="relative mb-4">
              <input
                type="password"
                id="outlined_error"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
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
            <div class="relative mb-4">
              <input
                type="password"
                id="outlined_error"
                aria-describedby="outlined_error_help"
                className="block border border-solid px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border-gray-500 focus:border-darkGreen bg-transparent rounded-[4px] border-1 appearance-none
               invalid:border-red-600 focus:outline-none focus:ring-0 invalid:focus:border-red-600 peer"
                placeholder=" "
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
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="link-checkbox"
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
      </section>
    </section>
  );
}
