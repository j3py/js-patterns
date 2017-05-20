const ConstructorPattern = require('./patterns/constructor');

const modulePattern = require('./patterns/module');
const namespacePattern = require('./patterns/namespaceModule');
const revealPattern = require('./patterns/revealModule');


// ES6 class declaration
class Patterns {
  constructor() {
  }

  get Construct() {
    // cant's use keyword "constructor"
    // this is a Car instance
    return ConstructorPattern;
  }

  get module() {
    return modulePattern;
  }

  get namespace() {
    return namespacePattern;
  }

  get reveal() {
    return revealPattern;
  }
};

module.exports = new Patterns;
