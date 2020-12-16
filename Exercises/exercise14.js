"use strict";

// function ucFirst(text){
//     if (!str) return str;
//     return text[0].toUpperCase() + text.slice(1);
// };


// alert((ucFirst("вася") == "Вася"));

//-------------------------------------------

// function checkSpam(text){
//     return(text.toLowerCase().includes("viagra") || text.toLowerCase().includes("xxx"));
// }



// alert(checkSpam('buy ViAgRA now')); // == true
// alert(checkSpam('free xxxxx')); //== true
// alert(checkSpam("innocent rabbit")); //== false

//---------------------------------------------------------------

// function truncate(str, maxlength){
//     if (maxlength < str.length){
//         return str.slice(0, maxlength - 1) + '…'
//     } else {
//         return str;
//     }

// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // = "Вот, что мне хотело…"

// alert(truncate("Всем привет!", 20)); // = "Всем привет!"

//------------------------------------------------------------

function extractCurrencyValue(text){
    return +text.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true
alert( extractCurrencyValue('$12220') === 12220 ); // true