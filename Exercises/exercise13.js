"use strict";
// function readNumber() {
//     let anser = prompt('Введите число', '');
//     (isFinite(anser))? ((anser === '') ? alert(null) : alert(anser)) : readNumber();
// };
// readNumber();

//------------------------------------------------

function randomInteger(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));

}



alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) );