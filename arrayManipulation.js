// arrayManipulation.js
// Task 1

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


// Task 2
function formatArrayStrings(stringArray, numberArray) {
    // Create a new array to store the modified strings
    const result = [];
  
    // Iterate through the input arrays
    for (let i = 0; i < stringArray.length; i++) {
      const str = stringArray[i];
      const num = numberArray[i];
  
      if (num % 2 === 0) {
        // capitalize the entire string if the number is even
      result.push(str.toUpperCase());
    } else {
      // convert the string to lowercase if the number is odd
      result.push(str.toLowerCase());
    }
  }

  return result;
}

// Usage:
const strings = ["Otilia", "Torgby", "Patience"];
const numbers = [3, 6, 9];
const modifiedStrings = formatArrayStrings(strings, numbers);
console.log(modifiedStrings); 