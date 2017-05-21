// singleton pattern - creates a single instance/checks for exists
// p.38 (v1.6.2)
var SingletonPattern = (function () {
  // options: an object containing configuration options for the singleton
  // e.g., var options = { name: 'test', pointX: 5 };
  function Singleton(options) {
    // set options to the options supplied
    // or an empty object if none are provided
    options = options || {};

    // set some properties for our singleton
    this.name = 'SingletonPattern';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  };

  //our instance holder;
  var instance;

  // an emulation of static variables and methods
  // see below for ES6 class declaration with static method
  var _static = {
    name: 'SingletonPattern',
    // method for getting an instance, it returns
    // a singleton instance of a singleton object
    getSingleton: function(options) {
      if(instance === undefined){
        console.log('--- NEW SINGLETON INSTANCE CREATED ---');
        instance = new Singleton(options);
      }
      return instance;
    },
    // added method for 'deleting' instance
    // this makes testing easier
    deleteInstance: function() {
      instance = undefined;
      return;
    }
  };

  return _static;
})();

// ES6 class declaration version
// this version also PASSED tests
//
// let instance;
// class SingletonPattern {
//   constructor(options) {
//     options = options || {};
//     this.name = 'SingletonPattern';
//     this.pointX = options.pointX || 6;
//     this.pointY = options.pointY || 10;
//   }
//
//   static getSingleton(options) {
//     if(instance === undefined){
//       console.log('--- NEW SINGLETON INSTANCE CREATED ---');
//       instance = new SingletonPattern(options);
//     }
//     return instance;
//   }
//
//   static deleteInstance() {
//     instance = undefined;
//     return instance;
//   }
// }

module.exports = SingletonPattern;
