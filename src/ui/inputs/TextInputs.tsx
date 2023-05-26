import React from 'react';

interface TextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  className = '',
}) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      placeholder=''
      onChange={onChange}
      className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-4 ${className}`}
    />
  );
};

export default TextInput;
