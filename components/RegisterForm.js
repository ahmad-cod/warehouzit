import ErrorMessage from "./ErrorMessage"
import { useState } from "react";
import { postFormData } from "@/services/api";
import { toast } from "react-toastify";
import Image from "next/image";
import FloatingLabelInput from "./FloatingLabelInput";


export default function RegisterForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    // set the username to be like the sample data given
    const username = (`${formData.firstName}.${formData.lastName[0]}`).toLowerCase()
    setFormData(prevData => ({...prevData, username}))
    
    // Add form validation rules here
    const trimmedFirstName = formData.firstName.trim();
    const trimmedLastName = formData.lastName.trim();
    
    if (!trimmedFirstName) {
      newErrors.firstName = 'First Name is required';
    }
    
    if (!trimmedLastName) {
      newErrors.lastName = 'Last Name is required';
    }
  
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
  
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
  
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
  
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      const response = await postFormData(newUser)
      if(response) {
        toast.success(response.message)
      }
      console.log('Form submitted:', formData);
      toast.success('Form submitted successfully!');
      setFormData({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      toast.error('Please check the form for errors.');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
          {/* First Name Input */}
         <FloatingLabelInput 
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
         />
          {/* Last Name Input */}
          <FloatingLabelInput
            id="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          {/* Email Address Input */}
          <FloatingLabelInput
            type="email"
            id="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          {/* Phone Number Input */}
          <FloatingLabelInput
            id="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
          />

          {/* Password Input */}
          <div className="relative">
          <FloatingLabelInput
            type="password"
            id="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div className="absolute top-4 right-4 -z-20">
            <Image
              loading="lazy"
              src='/images/eyeIcon.svg'
              alt="Eye Icon in the password input field"
              width={20}
              height={20}
            />
          </div>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <FloatingLabelInput
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <div className="absolute top-4 right-4 -z-20">
              <Image
                loading="lazy"
                src='/images/eyeIcon.svg'
                alt="Eye Icon in the password input field"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-darkGreen/90 bg-gray-100 border-gray-300 rounded focus:ring-darkGreen/75"
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