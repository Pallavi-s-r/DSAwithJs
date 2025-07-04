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