import React, { ReactNode } from 'react';

type StatusProps = {
  color: 'red' | 'green' | 'yellow';
  children: ReactNode;
};

export const Status: React.FC<StatusProps> = ({ color, children }) => {
  const getColorClass = () => {
    if (color === 'red') {
      return 'bg-productRed';
    } else if (color === 'green') {
      return 'bg-productGreen';
    } else if (color === 'yellow') {
      return 'bg-productYellow';
    }
    return '';
  };

  return (
    <div
      className={`font-medium text-white py-1 px-2 rounded-md cursor-pointer ${getColorClass()}`}
    >
      {children}
    </div>
  );
};
