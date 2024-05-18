// arrayManipulation.js

function processArray(arr) {
    // Create a new array to store the modified values
    const result = [];
  
    // Iterate through the input array
    for (const num of arr) {
      if (num % 2 === 0) {
        // Square the even numbers
        result.push(num ** 2);
      } else {
         // Triple the odd numbers
      result.push(num * 3);
    }
  }

  return result;
}

// Usage:
const inputArray = [5,10,15,20,25,30];
const modifiedArray = processArray(inputArray);
console.log(modifiedArray);         
