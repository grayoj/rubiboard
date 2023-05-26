import React, { ReactNode } from 'react';

interface FormButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<FormButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      className={`flex justify-center rounded-md border border-transparent bg-productGreen py-2 px-4 text-sm font-medium text-white shadow-sm hover:duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
