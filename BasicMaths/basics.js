///Simple Maths for DSA

//Extraction of digits from a number
let num = 12345;
while(num > 0) {
    let digit = num % 10; // Get the last digit
    console.log(digit); // Print the digit
    num = Math.floor(num / 10); // Remove the last digit
}

//Counting the number of digits in a number
let number = 12345;
let counter = 0; 
while(number > 0) {
    number = Math.floor(number / 10); // Remove the last digit
    counter++; // Increment the count
}
console.log(counter); // Print the count of digits

//Reversing a number
let reverseNum = 12345;
let reversed = 0;
while(reverseNum > 0) {
    let digit = reverseNum % 10; // Get the last digit
    reversed = reversed * 10 + digit; // Build the reversed number
    reverseNum = Math.floor(reverseNum / 10); // Remove the last digit
}
console.log(reversed); // Print the reversed number

//check palindrome number
let palindromeNum = 1321;
let originalNum = palindromeNum; // Store the original number
let rev =0 , rem;
while(palindromeNum > 0) {
    rem = palindromeNum % 10; // Get the last digit
    rev = rev * 10 + rem; // Build the reversed number
    palindromeNum = Math.floor(palindromeNum / 10); // Remove the last digit
}
if(originalNum === rev) {
    console.log('Palindrome');
}else {
    console.log('Not a Palindrome');
}

//Arrmstrong number
let armstrongNum = 153;
let sum = 0;
let originalArmstrongNum = armstrongNum; // Store the original number
while(armstrongNum > 0) {
    let digit = armstrongNum % 10; // Get the last digit
    sum += digit * digit * digit; // Add the cube of the digit to the sum
    armstrongNum = Math.floor(armstrongNum / 10); // Remove the last digit
}   
if(originalArmstrongNum === sum) {
    console.log('Armstrong Number');
} 
else {
    console.log('Not an Armstrong Number');
}
//GCD and HCF
let gcd = 1;
for(let i =1; i<= Math.min(12, 18); i++) {
    if(12 % i === 0 && 18 % i === 0) {
        gcd = i; // Update gcd if i is a common divisor
    }

}
console.log('GCD:', gcd); // Print the GCD

//LCM
let lcm = (12 * 18) / gcd;
console.log('LCM:', lcm); // Print the LCM

//check all divisors of a number
let numberToCheck = 28;
console.log(`Divisors of ${numberToCheck}:`); 
for(let i = 1; i <= numberToCheck; i++) {
    if(numberToCheck % i === 0) {
        console.log(i); // Print the divisor
    }
}

//Is Prime Number
let isPrime = true;
let numToCheck = 4;
if(numToCheck === 1) { console.log(`${numToCheck} is not a prime number`); return; } // 1 is not prime
if(numToCheck < 1) { console.log(`${numToCheck} is not a prime number`); return; } // Negative numbers and 0 are not prime
for(let i = 2; i <= Math.floor(numToCheck/2); i++) {
    if(numToCheck % i === 0) {
        isPrime = false; // If divisible, it's not prime
        break;
    }
}
if(isPrime) {
    console.log(`${numToCheck} is a prime number`);
} else {
    console.log(`${numToCheck} is not a prime number`);
}

