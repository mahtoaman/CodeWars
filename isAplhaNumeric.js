

 const isValidPin = function(pincode){
   return /^[a-zA-Z0-9]*$/.test(pincode);
 };

 console.log(isValidPin(''))