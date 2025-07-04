
//RECURSION

//printing numbers from 1 to n using recursion
function printNumbers(n) {
    if(n <= 0) return; // Base case 
    printNumbers(n - 1); // Recursive call
    console.log(n); // Print the number after the recursive call
}   
printNumbers(5); // Call the function with n = 5


//print numbers from n to 1 using recursion
function printReverse(n) {
    if(n <= 0) return; // Base case
    console.log(n); // Print the number before the recursive call
    printReverse(n - 1); // Recursive call
}
printReverse(5); // Call the function with n = 5
//print name N times using recursion
function print(name, n){
    if(n<=0) return; // Base case
    console.log(name); 
    print(name, n-1);
}
print('John', 5);

//factorial using iteration
function factorial(n) {
    if (n < 0) return "Undefined for negative numbers";

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Call the function with n = 5
//Factorial using recursion
function factorial(n) {
    if(n==0||n==1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}
console.log(factorial(5)); // Call the function with n = 5

//Fibonacci series using iteration - example 
function fibonacci(n) {
    let a = 0, b = 1;
    let series = [];

    for (let i = 0; i < n; i++) {
        series.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return series;
}
console.log(fibonacci(7)); // Call the function with n = 10
//Fibonacci series using recursion
function fib(n) {
    if (n <= 0) return []; // Base case for non-positive n
    if (n === 1) return [0]; // Base case for n = 1
    if (n === 2) return [0, 1]; // Base case for n = 2
    return fib(n-1)+ fib(n-2); // Recursive call
}
console.log(fib(5)); // Call the function with n = 10
//output: [0, 1, 1, 2, 3]

//Sum of digits using recursion
function sumOfDigits(n) {
    if (n === 0) return 0;  
    return n % 10 + sumOfDigits(Math.floor(n / 10)); // Recursive call
}
console.log(sumOfDigits(12345)); // Call the function with n = 12345


//sum of first n natural numbers using recursion
function sumOfNaturalNumbers(n) {
    if (n <= 0) return 0; // Base case
    return n + sumOfNaturalNumbers(n - 1); // Recursive call
}   

console.log(sumOfNaturalNumbers(5)); // Call the function with n = 5

//reverse a array using recursion
function reverseArray(arr, index = 0) {
    if (index >= arr.length / 2) return arr; // Base case
    // Swap elements
   let temp = [];
    temp = arr[index];
    arr[index] = arr[arr.length - 1 - index];
    arr[arr.length - 1 - index] = temp;
    return reverseArray(arr, index + 1); // Recursive call
}   
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Call the function with the array

//  string palindrome using recursion
function isPalindrome(str) {
    if (str.length <= 1) return true;   // Base case
    if (str[0] !== str[str.length - 1]) return false; // Check first and last characters
    return isPalindrome(str.slice(1, str.length - 1)); // Recursive call            
}
console.log(isPalindrome("racecar")); // Call the function with a palindrome string
console.log(isPalindrome("hello")); // Call the function with a non-palindrome string

//Power of a number using recursion
function power(base, exponent) {
    if (exponent === 0) return 1; // Base case
    return base * power(base, exponent - 1); // Recursive call
}
console.log(power(2, 3)); // Call the function with base = 2 and exponent = 3

//ssum of array elements using recursion
function sumArray(arr, index = 0) {
    if (index >= arr.length) return 0; // Base case
    return arr[index] + sumArray(arr, index + 1); // Recursive call
}
let array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); // Call the function with the array

//number of vowels in a string using recursion
function countVowels(str, index = 0) {
    if (index >= str.length) return 0; // Base case
    const vowels = 'aeiouAEIOU';
    let count = 0;
    if(vowels.includes(str[index])) { // Check if the character is a vowel
        count += 1; // Check if the character is a vowel
    }
    // const count = vowels.includes(str[index]) ? 1 : 0;  // Check if the character is a vowel            
    return count + countVowels(str, index + 1); // Recursive call
}

let string = "pallavi";
console.log(countVowels(string)); // Call the function with the string