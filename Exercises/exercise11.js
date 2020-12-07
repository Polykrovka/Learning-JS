"use strict";

// let calculator = {
//     read(){ 
//         this.oneNumber = +prompt('Введите первое число', '');
//         this.twoNumber = +prompt('Введите первое число', '');
//     },
//     sum(){
//         return this.oneNumber + this.twoNumber;
//     },
//     mul(){
//         return this.oneNumber * this.twoNumber;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

//-------------------------------------------------

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep(); // 1