"use strict";
// let age = prompt('Введите возраст','');
// alert(age >=14 && age <= 90);
//--------------------------------
// let age = prompt('Введите возраст','');
// alert(!(age >= 14 && age <= 90));
//------------------------------------
// let age = prompt('Введите возраст','');
// alert(age < 14 || age > 90);
//--------------------------------------
let userLogin = prompt('Введите логин','');
if (userLogin === "Админ"){
    let userPasword = prompt('Введите пароль','');
    if (userPasword == 'Я главный'){
        alert('Здравствуйте!');
    } else if (userPasword == undefined){
        alert('Отменено');
    } else {
        alert('Неверный пароль'); 
    }
} else if (userLogin == undefined){
    alert(`Отмененно`)
} else {
    alert('Я вас не знаю')
}
