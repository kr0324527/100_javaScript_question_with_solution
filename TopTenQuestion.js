//1. Write a JavaScript function to calculate the sum of two numbers. 
const getSum = function(a,b){
    return a + b
}
// console.log(`Result: ${getSum(3,9)}`);
// console.log(`Result: ${getSum(5,19)}`);
// console.log(`Result: ${getSum(43,90)}`);
    // Result: 12
    // Result: 24
    // Result: 133
    
// 2. Write a JavaScript program to find the maximum number in an array. 
const arr = [5,4,9,8,3,0,1]
//const max = Math.max(...arr)//i think this is most easy way
const max = [...arr].sort((a,b)=>b-a)
// let max = 0
// for (let i = 0; i < arr.length; i++) {
//     if(max<arr[i]){
//         max = arr[i];
//     }
    
// }
// console.log(max[0]);
// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function ispalindrome(palstring){ 
    const reversed = palstring.split('').reverse().join('')
    if(reversed === palstring){
        console.log("the string is palindrome");
        
    }else{
        console.log("the string is not a palindrome");

    }
}
const palstring = 'aba'
// ispalindrome(palstring)
// 4. Write a JavaScript program to reverse a given string. 
const givenString = "kunal"
function reverseString(getstring){
    return getstring.split('').reverse().join('')
}
// console.log(reverseString(givenString))
// output:lanuk
// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const getEven = [1,2,3,4,5,6,7]
function even(arr){
    return arr.filter(num=>num%2==0)
}
// console.log(even(getEven));
// output: [ 2, 4, 6 ]
// 6. Write a JavaScript program to calculate the factorial of a given number. 
let num = 4
function getFactorial(num){
    if(num === 0|| num === 1){
        return 1
    }else{
        return num*getFactorial(num - 1)
    }
}
// console.log(getFactorial(num))
// output:24
// 7. Write a JavaScript function to check if a given number is prime. 
const num2 = 2
function isprime(num){
     if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// console.log(isprime(num2));
// output:true

// 8. Write a JavaScript program to find the largest element in a nested array.
const nestedArray = [[5,4,9,8,3,0,1],[1,2,3,4,5,6,75],[67,34]]
function largestNumInNestedArr(array){
    let largest = array[0][0]
    for (const aee of array) {
        for (const bye of aee) {
            if(bye > largest){
                largest = bye
            }
        }
    }
    return largest
}
// console.log(largestNumInNestedArr(nestedArray));
// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function getfibonacci(terms){
    let first = 0,second = 1, next;
    let result = ""
    for (let i = 0; i < terms; i++) {
        result += first + " "
        next = first + second
        first = second  
        second = next
    }
    return result
    
}
function fibonacciSequence(numTerms) { 

  if (numTerms <= 0) return []; 

  if (numTerms === 1) return [0]; 

   

  let sequence = [0, 1]; 

  while (sequence.length < numTerms) { 

    let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 

    sequence.push(nextNumber); 

  } 

  return sequence; 

} 
const terms = 23
// console.log(fibonacciSequence(terms))
// output:0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
const sentence = 'please follow kunal for more of such content'
function capitalize(sentence){
      return sentence.replace(/\b\w/g, l => l.toUpperCase()); 

}
// console.log(capitalize(sentence));
//output: Please Follow Kunal For More Of Such Content
