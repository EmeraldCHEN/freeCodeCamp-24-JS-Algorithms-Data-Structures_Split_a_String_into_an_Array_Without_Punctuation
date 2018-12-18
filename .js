function splitify(str) {
 let newStr = str.replace(/\W/g, ' ');
  
  return newStr.split(" ");
}
splitify("Hello World,I-am code");
