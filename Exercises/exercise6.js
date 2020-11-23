'use strict';
// for(let i = 2; i < 11; i +=2){
//     console.log(i);
// }

//----------------------------------------

// let i = 0
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
//   }

//--------------------------------------------------------

// let num ='';
// do {
//     num = prompt('Введите число больше ста', '');
//     if (num == null || num =='') break;
// } while (num <= 100);

//--------------------------------------
let result = '';
let count = 0;
let n = prompt('Введите число', '');
    for(let i = 2; i <= n ; i++){
        count = 0; 
        for(let j = i; j != 1; j--){
            if(i % j === 0) count += 1;
            if (count > 1) break;
        }
        if(count === 1) result += i +' ';
    }
alert(result);
