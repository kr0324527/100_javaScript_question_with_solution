// 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 
// this section of code is in html section
// 2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sorted(arr,key){
    return arr.sort((a, b) => a[key] - b[key]);
}
const keyarr = [
    {name:"kunal ",age:19},
    {name:"kally ",age:18},
    {name:"nishant ",age:19}
]
// console.log(sorted(keyarr,'age'));
// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
const nestedarr = [1,2,3,4,5,[7,8,9]]
function clone(obj){
    return JSON.parse(JSON.stringify(obj))
}
const clonearr = clone(nestedarr)
clonearr[5][1] = 2
// console.log(nestedarr);

// console.log(clonearr);

//  4. Write a recursive function to calculate the factorial of a given number.  
function factorial(num){
    if(num == 1||num == 0){
        return 1;
    }
    let result = num * factorial(num - 1)
    return result
}
console.log(factorial(4));

// 5. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 
const sort1 = [1,2,3,4,5,6]
const sort2 = [3,4,5,6,7,8]
function sortTwo(arr1 , arr2){
    return [...arr1,...arr2].sort((a,b) => a - b)
}
const merge = sortTwo(sort1,sort2)
// console.log(merge);

// 6. Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case. 
function ispalindrome(str){
    const reverse =  str.toLowerCase().split('').reverse().join('');
    if(reverse === str){
        return true
    }
    return false
}
console.log(ispalindrome('#k#'));
// 7. Create a JavaScript class for a linked list with methods to insert a node at the beginning, end, or at a specific position, and to delete a node from a given position. 
