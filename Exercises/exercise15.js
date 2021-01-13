"use strict";

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.ceil(styles.length/2)-1] = 'Классика';
// alert(styles.shift());
// styles.unshift('Рэп','Рэгги')
// alert(styles);

//------------------------------------------------------------

// function sumInput(){
//   let array = [];
//   let sum = 0;
//   let num = 0;
//   do {
//     num = prompt('Введите число ','');
//     array.push(+num);
//   } while(isFinite(num) && num !== '')
//   array.pop();
//   for(let i of array){
//     sum+= + i;
//   }
//   return sum;
// };

// alert(sumInput());


// -------------------------------------------------------------

function getMaxSubSum(array){
  let maxSum = 0;

  for(let i = 0; i < array.length; i++) {
    let underSum = 0;
    for(let j = i; j < array.length; j++) {
      underSum += array[j];
      maxSum = Math.max(maxSum, underSum);
    }
  }
  return maxSum;
};
// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// Быстрый вариант из книжки, просто и гениально но я не додумался.

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;