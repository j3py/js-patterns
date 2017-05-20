var modulePattern = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {

      return counter++;
    },
    resetCounter: function () {
      let priorVal = counter;
      counter = 0;
      return "counter value prior to reset: " + priorVal;
    }
  };
})();

module.exports = modulePattern;
