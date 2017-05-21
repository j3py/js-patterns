// revealing module pattern - public/private stuff again
// p.33 (v1.6.2)
var RevealModulePattern = (function () {
  var privateVar = "Agent Cooper",
      publicVar = "Would you like a donut?";

  function privateFunc() {
    console.log("Name:" + privateVar);
  }

  function publicSetName(strName) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunc();
  }

  // reveal public pointers to
  // private functions and properties
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();

module.exports = RevealModulePattern;
