"use strict";

// let someObject = () =>{
//     //do some thing
// }

// function A() { return someObject; }
// function B() { return someObject; }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

//--------------------------------------------------

// function Calculator() {

//     this.read = function() { 
//         this.oneNumber = +prompt('Введите первое число', '');
//         this.twoNumber = +prompt('Введите первое число', '');
//     };
//     this.sum = function(){
//         return this.oneNumber + this.twoNumber;
//     };
//     this.mul = function(){
//         return this.oneNumber * this.twoNumber;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum = " + calculator.sum() );
//   alert( "Mul = " + calculator.mul() );

//-------------------------------------------------------

function Accumulator(startingValue){
    this.allValue = startingValue;
    this.read = function(){
        this.allValue += +prompt('сколько хотите прибавить?', 0);
    }

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.allValue); // выведет сумму этих значений