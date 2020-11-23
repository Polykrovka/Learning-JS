"use strict";

// function checkAge(age){
// return (age> 18) ? true : confirm('Родители разрешили?');
// };

// alert(checkAge(prompt('Age', '18')));

//-----------------------------------

// function checkAge(age){
//     return (age> 18 || confirm('Родители разрешили?'));
// };
    
// alert(checkAge(prompt('Age', '18')));
    

//-------------------------

// function min (n, n2){
//     return (n > n2) ? n2 : n;
// }
// alert(min(2,5));

//------------------------------------------------

function pow (x,n){
    if (n%1 === 0){
        return x ** n;
    }
    return 'Используйте натуральное число';
};
alert(pow( prompt('введите число', ''), prompt('Введите степень', '')));