import React from 'react';
import { DropdownOptionInputProps } from '../../types/DropdownInput';

export const DropdownOptionInput: React.FC<DropdownOptionInputProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      className='block w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-productGreen focus:border-transparent'
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
