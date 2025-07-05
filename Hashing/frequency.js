// This code counts the frequency of each element in an array using a hash map.
// It iterates through the array and updates the count of each element in the hash map.
// Finally, it returns the hash map containing the frequency of each element.


//pseudocode

let arr2 = [1, 2, 2, 3, 1, 4, 2];
function countFreq(num,arr2) {
    let count= 0;
    for(let i=0; i<arr2.length; i++) {
    if(arr2[i]===num) {
        count++;
    }
}
console.log(count);
    return count;
}
countFreq(2, arr2); // returns 3

//by hashing method ---- it simply means pre store and fetch the value from the hash map
let arr = [1, 2, 2, 3, 1, 4, 2];

function countFrequency(arr) {
    let freq = {}; // acts as the hash map

    for (let num of arr) {
        if (freq[num]) {
            freq[num] += 1;
        } else {
            freq[num] = 1;
        }
    }
    return freq;
}
countFrequency(arr);
   

//2 . Find the highest and lowest frequency element in an array

function findHighLowFreq(arr) {
    let freq = countFrequency(arr);
    let maxFreq = -Infinity;
    let minFreq = Infinity;
    let maxElem, minElem;  
    for (let num in freq) {
        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
            maxElem = num;
        }  
        if (freq[num] < minFreq) {
            minFreq = freq[num];
            minElem = num;
        }
    }
    console.log(`Max Element: ${maxElem}, Max Frequency: ${maxFreq}`);
    console.log(`Min Element: ${minElem}, Min Frequency: ${minFreq}`);
    return {
        maxElement: maxElem,
        maxFrequency: maxFreq,  
        minElement: minElem,
        minFrequency: minFreq
    };
}
findHighLowFreq(arr);


//3. Find the frequency of each character in a string
function countCharFrequency(str) {
    let freq = {}; // acts as the hash map
    for (let char of str) {
        if (freq[char]) {
            freq[char] += 1;
        } else {
            freq[char] = 1;
        }   
    }
    return freq;
}
let str = "hello world";
console.log(countCharFrequency(str)); // returns { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//4. Find the frequency of each word in a sentence
function countWordFrequency(sentence) {
    let words = sentence.split(' ');        
    let freq = {}; // acts as the hash map

    for (let word of words) {
        if (freq[word]) {
            freq[word] += 1;
        } else {
            freq[word] = 1;
        }   
    }

    return freq;


}let sentence = "this is a test this is only a test";
console.log(countWordFrequency(sentence)); // returns { this: 2, is: 2, a: 2, test: 2, only: 1 }    

//5. Find the frequency of each digit in a number
function countDigitFrequency(num) {
    let freq = {}; // acts as the hash map
    let strNum = num.toString(); // Convert number to string for iteration
    for (let digit of strNum) {
        if (freq[digit]) {
            freq[digit] += 1;
        } else {
            freq[digit] = 1;
        }       
    }
    return freq;
}
let num = 123321;
console.log(countDigitFrequency(num));

//6. Find the frequency of each element in a 2D array
function count2DFrequency(arr) {
    let freq = {}; 
    for (let subArr of arr) {
        for (let num of subArr) {
            if (freq[num]) {
                freq[num] += 1;

            } else {
                freq[num] = 1;
            }
        }
    }
    return freq;
}
let arr2D = [[1, 2, 2], [3, 1, 4], [2, 3]];
console.log(count2DFrequency(arr2D)); 