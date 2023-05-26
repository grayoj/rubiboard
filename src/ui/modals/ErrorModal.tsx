import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const ErrorModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className='bg-white p-6 rounded shadow-lg'>
        {children}
        <button
          className='mt-4 px-4 py-2 bg-gray-500 text-white rounded'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
