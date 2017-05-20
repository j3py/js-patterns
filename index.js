const modulePattern = require('./patterns/module');

// ES6 class
// Patterns is a model for all the patterns
class Patterns {
  constructor() {
  }

  get module() {
    return modulePattern;
  }
};

module.exports = new Patterns;
