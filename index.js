const ConstructorPattern = require('./patterns/constructor');

const ModulePattern = require('./patterns/module');
const NamespacePattern = require('./patterns/namespaceModule');
const RevealPattern = require('./patterns/revealModule');

const SingletonPattern = require('./patterns/singleton');

const ObserverPattern = require('./patterns/observer');


// ES6 class declaration
class Patterns {
  constructor() {
  }

  get Construct() {
    // cant's use keyword "constructor"
    // this is a Car instance
    return ConstructorPattern;
  }

  get Module() {
    return ModulePattern;
  }

  get Namespace() {
    return NamespacePattern;
  }

  get Reveal() {
    return RevealPattern;
  }

  get Singleton() {
    return SingletonPattern;
  }

  get Observer() {
    return ObserverPattern;
  }
};

module.exports = new Patterns;
