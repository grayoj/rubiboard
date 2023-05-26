import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAccountSelection = () => {
 const [selectedOption, setSelectedOption] = useState('');
 const navigate = useNavigate();

 const handleOptionSelect = (option: string) => {
  setSelectedOption(option);
 };

 const handleNextButtonClick = () => {
  if (selectedOption === 'business') {
   navigate('/auth');
  } else if (selectedOption === 'individual') {
   navigate('/auth');
  }
 };

 return {
  selectedOption,
  handleOptionSelect,
  handleNextButtonClick,
 };
};

export default useAccountSelection;
