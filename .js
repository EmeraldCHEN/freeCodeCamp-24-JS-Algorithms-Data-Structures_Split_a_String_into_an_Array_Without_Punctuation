function splitify(str) {
 let newStr = str.replace(/\W/g, ' ');
  
  return newStr.split(" ");
 
 return str.split(/\W/); // Simply split the string to create a new array of words.
}
splitify("Hello World,I-am code");
