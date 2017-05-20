// module pattern - namespace with private stuff
// p.31 (v1.6.1)
var namespaceModulePattern = (function () {
  var privateVar, privateMethod;

  // a private counter variable
  privateVar = 0;

  // a private function which logs any arguments
  privateMethod = function(foo) {
    console.log("PRIVATE VAR:", privateVar);
    console.log("FOO IN PRIVATE METHOD:", foo);
  };

  return {
    // a public variable
    publicVar: "foo",

    // a public function utilizing private stuff
    publicFunction: function(bar) {
      // increment our private counter
      privateVar++;

      // call our private method using bar
      privateMethod(bar);

      return bar + "!!";
    }
  };
})();

module.exports = namespaceModulePattern;
