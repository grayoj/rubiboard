const generateRandomString = (): string => {
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
 let result = '';

 for (let i = 0; i < 15; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  result += characters[randomIndex];
 }

 return result;
};

export default generateRandomString;
