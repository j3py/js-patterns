const modulePattern = require('./patterns/module');
const namespacePattern = require('./patterns/namespaceModule');

// ES6 class declaration
// Patterns is a model for all the patterns
class Patterns {
  constructor() {
  }

  get module() {
    return modulePattern;
  }

  get namespace() {
    return namespacePattern;
  }
};

module.exports = new Patterns;
