//Pattern

for(let i = 0; i < 5; i++) {
    let row = '';
    for(let j = 0; j <=5; j++) {
        row += '*';
    }
    console.log(row);
}

// *
// **
// ***
// ****

for(let i = 0; i < 5; i++) {
    let row = '';
    for(let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

for(let i = 1; i < 5; i++) {
    let row = '';
    for(let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

// 1
// 22
// 333
// 4444
for(let i = 1; i < 5; i++) {
    let row = '';
    for(let j = 1; j <= i; j++) {
        row += i;
    }
        console.log(row);    
}
// *****
// ****
// ***
// **
// *
let n =5;
for(let i =1; i<=n;i++){
    let row = '';
    for(let j = 0; j<n-i+1; j++) {
        row += '*';
    }
    console.log(row);
}
let m =5;
for(let i =1; i<=m;i++){
    let row = '';
    for(let j = 1; j<m-i+2; j++) {
        row += j;
    }
    console.log(row);
}

//   *
//  *** 
// *****
let k=5;
for(let i =0;i<k;i++){
    let row = '';
    for(let j = 0; j<k-i-1; j++) {
        row += ' ';
    }
    for(let j = 0; j<2*i+1; j++) {
        row += '*';
    }
    for(let j = 0; j<k-i-1; j++) {
        row += ' ';
    }
    console.log(row);
}

//   inversion of above pattern
let g = 3;
for(let i = 0; i <= g; i++) {

    let row = '';
    for(let j = 0; j <i; j++) {
        row += ' ';
    }
    for(let j = 0; j < 2*g-(2*i+1); j++) {
        row += 'x';
    }
    for(let j = 0; j < i; j++) {
        row += ' ';
    }
    console.log(row);
}

// *
// **
// ***
// ****
// ***
// **
// *

let z = 4;
for(let i = 1; i <= 2*z-1; i++) {
    let row = '';
    let stars = i <= z ? i : 2*z - i;

    for(let j = 1; j <= stars; j++) {
        row += '*';
    }
    console.log(row);
}
for (let i = 0; i < 5; i++) {
    let row = '';
    let start = i % 2 === 0 ? 1 : 0;

    for (let j = 0; j <= i; j++) {
        row += start + ' ';
        start = 1 - start; // Toggle between 1 and 0
    }

    console.log(row.trim());
}

// 1    1
// 12  21
// 123321
let y= 3;
let space = 2*y-1;
for(let i = 1; i <= y; i++) {
    let row = '';
    //numbers
    for(let j = 1; j <= i; j++) {
        row += j;
    }
    //spaces
    for(let j = 1; j <= space; j++) {
        row += ' ';
    }
    //numbers
    for(let j = i; j >= 1; j--) {
        row += j;
        // space -= 2; // Decrease space for next row
    }
    space -= 2
    console.log(row);
}

//1
//23
//456
let count = 1;
for(let i = 1; i <= 3; i++) {
    let row = '';
    for(let j = 1; j <= i; j++) {
        row += count;   
        count++;}
    console.log(row);
}
//A
//AB
//ABC
let alphabets = ['A', 'B', 'C', 'D', 'E'];
for(let i = 1; i <=3; i++) {
    let row = '';
    for(let j = 0; j < i; j++) {
        row += alphabets[j];
    }
    console.log(row);
}

// ABC
// AB
// A
let letters = ['A', 'B', 'C', 'D', 'E'];
for(let i = 3; i >= 1; i--) {
    let row = '';
    for(let j = 0; j < i; j++) {
        row += letters[j];
    }
    console.log(row);
}

//a
//bb
//ccc
let lowerCaseAlphabets = ['a', 'b', 'c'];
for(let i =0;i<=lowerCaseAlphabets.length;i++){
    let row = '';
    for(let j = 0; j <= i; j++) {
        row += lowerCaseAlphabets[i];
    }
    console.log(row);
}
//   a
//  aba
// abcba

let abc = ['a', 'b', 'c'];
let w = abc.length;

for (let i = 0; i < w; i++) {
    let row = '';

    // Spaces before the row
    for (let j = 0; j < w - i - 1; j++) {
        row += ' ';
    }

    // Left side letters: abc[0] to abc[i]
    for (let j = 0; j <= i; j++) {
        row += abc[j];
    }

    // Right side letters: abc[i-1] to abc[0]
    for (let j = i - 1; j >= 0; j--) {
        row += abc[j];
    }

    // Optional: trailing spaces (for symmetry)
    for (let j = 0; j < w - i - 1; j++) {
        row += ' ';
    }

    console.log(row);
}

//E
//DE
//CDE
let letters2 = [ 'C', 'D', 'E'];
for(let i = letters2.length -1; i >=0; i--) {
    let row = '';
    for(let j = i; j < letters2.length; j++) {
        row += letters2[j];
    }
    console.log(row);
}

// ******
// **  **
// *    *
// *    *
// **  **
// ******
let size = 3; // Controls half of the height
let spaceCount = 0;

// Top Half
for (let i = 0; i < size; i++) {
    let row = '';

    // Left stars
    for (let j = 0; j < size - i; j++) {
        row += '*';
    }

    // Middle spaces
    for (let j = 0; j < spaceCount; j++) {
        row += ' ';
    }

    // Right stars
    for (let j = 0; j < size - i; j++) {
        row += '*';
    }

    console.log(row);
    spaceCount += 2;
}

// Bottom Half
spaceCount -= 2; // Adjust to start decreasing

for (let i = 1; i <= size; i++) {
    let row = '';

    // Left stars
    for (let j = 0; j < i; j++) {
        row += '*';
    }

    // Middle spaces
    for (let j = 0; j < spaceCount; j++) {
        row += ' ';
    }

    // Right stars
    for (let j = 0; j < i; j++) {
        row += '*';
    }

    console.log(row);
    spaceCount -= 2;
}

// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *

let b = 3; // Controls half the height
let space1 = 2 * b - 2; // Initial space between star blocks

for (let i = 0; i < 2 * b - 1; i++) {
    let row = '';
    let stars = i < b ? i + 1 : 2 * b - i - 1;

    // Left stars
    for (let j = 0; j < stars; j++) {
        row += '*';
    }

    // Middle spaces
    let currentSpace = i < b ? space1 : (i - b + 1) * 2;
    for (let j = 0; j < currentSpace; j++) {
        row += ' ';
    }

    // Right stars
    for (let j = 0; j < stars; j++) {
        row += '*';
    }

    console.log(row);

    // Adjust space for next row
    if (i < b - 1) {
        space1 -= 2;
    } else {
        space1 += 2;
    }
}


// ****
// *  *
// *  * 
// ****

for(let i =0;i<=4;i++){
    let row = '';
    for(let j = 0; j <= 4; j++) {
        if(i === 0 || i === 4 || j === 0 || j === 4) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
