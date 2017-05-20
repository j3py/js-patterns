const ConstructorPattern = require('./patterns/constructor');
const modulePattern = require('./patterns/module');
const namespacePattern = require('./patterns/namespaceModule');

// ES6 class declaration
class Patterns {
  constructor() {
  }

  get module() {
    return modulePattern;
  }

  get namespace() {
    return namespacePattern;
  }

  get Construct() {
    // cant's use keyword "constructor"
    // this is a Car instance
    return ConstructorPattern;
  }
};

module.exports = new Patterns;
