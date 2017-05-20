// constructor pattern - car model
// p.20 (v1.6.2)
var Car = function(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + " has done " + this.miles + " miles";
  };
}

//ES6 class declaration version:
// class Car {
//   constructor(model, year, miles){
//     this.model = model;
//     this.year = year;
//     this.miles = miles;
//   }
//
//   get toString() {
//     return this.toDescString();
//   }
//
//   toDescString() {
//     return this.model + " has done " + this.miles + " miles";
//   }
// }

module.exports = Car;
