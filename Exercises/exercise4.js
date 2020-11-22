"use strict";
let anser = prompt('Какое «официальное» название JavaScript?','');
if (anser == 'ECMAScript'){
    alert('Правильно!')
} else {
    alert('Не знаете? "ECMAScript"!')
}
let number = prompt('Введите любое число:', '');
if (number > 0){
    alert(1);
} else if (number < 0){
    alert(-1);
} else if (number === 0){
    alert(0);
} else {
    alert('Это не число');
}