// Write a function that takes a number as an argument and 
// returns "even" if the number is even, and "odd" if it is odd.
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(4)); 
console.log(evenOrOdd(7));
// Write a function that takes a string as an argument 
// and returns a new string where the first letter of each
//  word is capitalized.
function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }
console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('the quick brown fox jumped over the lazy dog'));

// Write a function that takes an array of numbers as 
// an argument and returns the sum of all the even numbers in the array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i]
      }
    }
    return sum;
  }

console.log(sumOfEvenNumbers(arr));

// Write a function that takes an array of strings as
//  an argument and returns a new array that includes 
//  only the strings that are longer than 5 characters.
function takesArrayOfStrings(names){
    let array1 = [];
    for (let i = 0; i < names.length; i++) {
         if (names[i].length > 5) {
            array1.push(names[i])
            
         }
         
        }
    return array1 
}
names = ["cats","tomatoes","cows","studies","hens"]
console.log(takesArrayOfStrings(names));