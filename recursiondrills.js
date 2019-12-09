// //1. Counting Sheep
// function countingSheep(num) {
//   //Base Case
//   if (num === 0) {
//     return console.log('All sheep jumped over the fence')
//   }
//   console.log(`${num}: Another sheep jumps over the fence`);
//   return countingSheep(num - 1);
// }
// countingSheep(3);

// //2. Powert Calculator
// function powerCalculator(base, exponent) {
//   if (base <= 1 || exponent < 0) {
//     return console.log('Only exponents greater than or equal to 0')
//   }

//   //Base Case
//   if (exponent === 0) {
//     return 1
//   } else {
//     return base * (powerCalculator(base, exponent - 1))
//   }

// }

// console.log(powerCalculator(10, 2));

// //3. Reverse String
// function reverseString(str) {
//     //Base Case
//     if(str === '') {
//         return '';
//     }

//   return str[str.length - 1] + reverseString(str.slice(0, str.length-1))

// }
// console.log(reverseString('ab'));

// //4. nth Triangular Number
// function triangleNum(n) {
//   if (n === 0) {
//     return 0;
//   }

//   return n + triangleNum(n-1)

// }
// console.log(triangleNum(9));

// //5. String Splitter
// function strSplitter(str, sep) {
//   let idx = str.indexOf(sep);
//   //Base Case
//   if (idx === -1 ) {
//     return [str]
//   }
//   return [str.slice(0, idx), ...strSplitter(str.slice(idx + 1), sep)];
// }
// console.log(strSplitter('02/02/2020', '/'));

// //6. Fibonacci
// function fibonacci(num) {
//   //Base Case
//   if(num <= 0) {
//     return 0;
//   }
//   if (num <= 2) {
//     return 1;
//   }
//   return fibonacci(num-1) + fibonacci(num-2);
// }
// fibonacci(7);

// //7. Factorial
// function factorial(num){
//   //Base Case
//   if(num === 0) {
//     return 1;
//   }
//   return  num * factorial(num - 1);
// }
// console.log(factorial(5));

//8. Find a way out of the maze
function maze(mz, x, y, path) {
  let newPath = [...path];
  let sizeY = mz.length;
  let sizeX = mz[0].length;
  //Base Case
  let nextPos;

  //found exit
  console.log(x, y)
  if (mz[y][x] === 'e') {
    console.log(newPath)
    console.log('exit');
    return
    // newPath.push('exit')
    // return newPath
  }

  if (x + 1 < sizeX) {
    if (mz[y][x + 1] !== '*') {
      newPath.push('R')
      maze(mz, x+1, y, newPath)
    }
  }

  // if (x - 1 >= 0) {
  //   if (mz[y][x - 1] === ' ') {
  //     newPath.push('L')
  //     maze(mz, x-1, y, newPath)
  //   }
  // }

  if (y + 1 < sizeY) {
    if (mz[y + 1][x] !== '*') {
      newPath.push('D')
      maze(mz, x, y+1, newPath)
    }
  }

  // if (y - 1 >= 0) {
  //   if (mz[y - 1][x] !== '*') {
  //     newPath.push('U')
  //     maze(mz, x, y-1, newPath)
  //   }
  // }
  return
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let easyMaze = [
  [' ', ' ', 'e'],
  [' ', '*', ' '],
  [' ', ' ', ' ']
];
console.log('maze')
maze(mySmallMaze, 0, 0, [])




// //12 Binary Representation
// function binaryRep(num) {
//   if(num <=0) {
//     return ''
//   }
//   let binary = num  % 2;
//   return binaryRep(Math.floor(num/2)) + binary;
// }
// console.log(binaryRep(25));