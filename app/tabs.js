"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Login from "@/components/LoginForm";
import Register from "@/components/RegisterForm";
import Image from "next/image";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="max-w-sm mx-8 overflow-hidden">
      <div className="mb-4 border-b border-gray-200 flex items-center gap-4 gap-x-6 mt-4 max-w-md py-4 pb-2 relative transition-all duration-500">
        <div
          className={
            activeTab === 1
              ? "text-darkGreen before:absolute before:h-1 before:top-[43px] before:left-0 before:w-[50px] before:bg-darkGreen transition duration-300"
              : "text-gray-300 transition duration-300 cursor-pointer"
          }
          onClick={() => toggleTab(1)}
        >
          Login
        </div>
        <div
          className={
            activeTab === 2
              ? "text-darkGreen before:absolute before:h-1 before:top-[43px] before:left-[62px] before:w-[70px] before:bg-darkGreen transition before:transition duration-300 before:duration-700"
              : "text-gray-300 cursor-pointer"
          }
          onClick={() => toggleTab(2)}
        >
          Register
        </div>
      </div>

      <div className="user-tabs flex gap-x-1 sm:gap-x-4 justify-between w-full">
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
        <Login />
      </section>

      <section className={activeTab === 2 ? "block mt-4" : "hidden"}>
        <Register />
      </section>
    </section>
  );
}
