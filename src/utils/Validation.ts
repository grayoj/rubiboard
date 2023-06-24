export const isStepValid = (step: number, formData: any) => {
 switch (step) {
  case 1:
   return formData.companyName !== '' && formData.companyName.length <= 20;
  case 2:
   return (
    formData.username !== '' &&
    formData.password !== '' &&
    formData.username.length >= 6 &&
    formData.password.length >= 6
   );
  case 3:
   return formData.cacNumber !== '' && formData.cacNumber.length >= 14;
  case 4:
   return formData.streetAddress !== '' && formData.streetAddress.length <= 30;
  case 5:
   return formData.companyState !== '';
  case 6:
  case 7:
   return formData.riderNumber !== '';
  case 8:
   return validateEmail(formData.email);
  case 9:
   return true;
  default:
   return false;
 }
};

export const validateEmail = (email: string) => {
 // Basic email validation regex
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return regex.test(email);
};

export const validateStep = (step: number, formData: any, name: any) => {
 let error = '';
 switch (step) {
  case 1:
   error =
    formData.companyName !== '' && formData.companyName.length <= 6
     ? ''
     : 'Company name is required and should be within 20 characters.';
   break;
  case 2:
   if (name === 'username' || name === 'password') {
    error =
     formData[name] !== '' && formData[name].length >= 6
      ? ''
      : 'Username and password are required and should be at least 6 characters.';
   }
   break;
  case 3:
   if (formData.cacNumber === '') {
    error = 'CAC number is required.';
   } else if (!/^\d{1,14}$/.test(formData.cacNumber)) {
    error = 'CAC number should be a numeric value up to 14 digits.';
   } else {
    error = '';
   }
   break;
  case 4:
   error =
    formData.streetAddress !== '' && formData.streetAddress.length <= 30
     ? ''
     : 'Street address is required and should be within 30 characters.';
   break;
  case 5:
   error = formData.companyState !== '' ? '' : 'Company state is required.';
   break;
  case 6:
  case 7:
   error = formData.riderNumber !== '' ? '' : 'Rider number is required.';
   break;
  case 8:
   error = validateEmail(formData.email) ? '' : 'Invalid email.';
   break;
  default:
   break;
 }
 return error;
};



