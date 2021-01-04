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
  let underSum = 0;
  for(let i of array){
    if(i < 0){continue}
    if(i > underSum){
      underSum += i;
    }
  }



}


getMaxSubSum([-1, 2, 3, -9]) //= 5 
getMaxSubSum([2, -1, 2, 3, -9])// = 6
getMaxSubSum([-1, 2, 3, -9, 11])// = 11
getMaxSubSum([-2, -1, 1, 2]) //= 3
getMaxSubSum([100, -9, 2, -3, 5]) //= 100
getMaxSubSum([1, 2, 3]) //= 6 (берём все)

getMaxSubSum([-1, -2, -3]) //= 0