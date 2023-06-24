let countEven = 0;
let countOdd = 0;
let countZero = 0;

function getCountEvenOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'number') {
      if (arr[i] === 0) {
        countZero++;
      } else {
        if (arr[i] % 2 === 0) {
          countEven++;
        }
        
        if (arr[i] % 2 !== 0) {
          countOdd++;
        }
      }
    }
  }
}

const arr = [3, 2, 7, 3, null, 0, -4, -1, 'b'];
getCountEvenOddNumbers(arr);
console.log('Количество нулей в массиве ' + countZero);
console.log('Количество четных чисел в массиве ' + countEven);
console.log('Количество не четных чисел в массиве ' + countOdd);