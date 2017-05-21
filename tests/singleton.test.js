const patterns = require('../index');
const options = [
  null,
  {
    pointX: 1000,
    pointY: 100
  },
  {
    pointX: 0,
    pointY: -0
  }
];
const defaultOpt = {
  name: 'SingletonPattern',
  pointX: 6,
  pointY: 10
};

beforeEach(() => {
  return patterns.Singleton.deleteInstance();
});

// singleton pattern
// read console logs to make sure new instances are created only when appropriate
// the beforeEach Jest method (above) will
// test delete instance method implicitly
// NOTE: all tests passed for ES6 class declaration version too

test('Test singleton instances with default options.', () => {
  for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    expect(patterns.Singleton.getSingleton(opt))
      .toEqual(defaultOpt);
  }
});

test('Test singleton instances with non-default options.', () => {
  for (let i = 1; i < options.length; i++) {
    let opt = options[i];
    expect(patterns.Singleton.getSingleton(opt))
      .toEqual({
        name: defaultOpt.name,
        pointX: 1000,
        pointY: 100
      });
  }
});
