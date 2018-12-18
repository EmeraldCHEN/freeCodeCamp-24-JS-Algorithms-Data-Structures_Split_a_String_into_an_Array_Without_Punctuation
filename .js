function splitify(str) {
  
    let newStr = str.replace(/\W/g, ' ');
  
    return newStr.split(" ");
 
   // Or simply split the string to create a new array of words since strings are immutable
  
   // return str.split(/\W/); 
}

splitify("Hello World,I-am-coding"); // Returns ["Hello", "World", "I", "am", "coding"]


// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method/


