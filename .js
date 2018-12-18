function splitify(str) {
  let newStr = str.replace(/\W/g, ' ');
  
  return newStr.split(" ");
 
 // return str.split(/\W/); // Or simply split the string to create a new array of words since strings are immutable
}
splitify("Hello World,I-am code");
