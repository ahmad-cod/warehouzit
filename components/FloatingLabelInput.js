// components/FloatingLabelInput.js
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const FloatingLabelInput = ({ type = 'text', id, label, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const shouldFloatLabel = isFocused || error || value.trim() !== '' || value !== '';

  return (
    <div className="relative mb-4">
      <input
        type={type}
        id={id}
        className={`appearance-none border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 focus:shadow-md focus:border-darkGreen bg-transparent rounded-[4px] border-1
           focus:outline-none focus:ring-0 ${error ? 'border-red-500' : 'border-gray-400'} peer`}
        placeholder=" "
        name={id}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm peer-focus:text-base transform ${
          shouldFloatLabel ? '-translate-y-1.5 left-2' : 'top-1/2'
        } z-10 origin-[0] bg-white px-2 ${
          shouldFloatLabel ? 'peer-focus:px-2' : 'peer-placeholder-shown:px-2'
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
           peer-placeholder-shown:top-1/2 ${
             shouldFloatLabel ? 'peer-focus:top-1' : ''
           } peer-focus:scale-75 peer-focus:-translate-y-4 ${
             shouldFloatLabel ? 'peer-focus:left-4' : 'peer-placeholder-shown:left-2'
           } ${error ? 'text-red-500 translate-y-4 scale-100 peer-placeholder-shown:top-0 left-4' : 'text-gray-800'}
        `}
      >
        {label}
      </label>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FloatingLabelInput;
