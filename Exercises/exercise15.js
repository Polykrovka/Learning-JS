"use strict";

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.ceil(styles.length/2)-1] = 'Классика';
// alert(styles.shift());
// styles.unshift('Рэп','Рэгги')
// alert(styles);

//------------------------------------------------------------

function sumInput(){
  let array = [];
  let sum = 0;
  let num = 0;
  do {
    num = prompt('Введите число ','');
    array.push(+num);
  } while(isFinite(num) && num !== '')
  array.pop();
  for(let i of array){
    sum+= + i;
  }
  return sum;
};

alert(sumInput());