const modulePattern = require('./module');

// trying out tests on module pattern module
test('Test incrementCounter method: 0.', () => {
  expect(modulePattern.incrementCounter()).toBe(0);
});

test('Test incrementCounter method again: 1.', () => {
  expect(modulePattern.incrementCounter()).toBe(1);
});

test('Test resetCounter method.', () => {
  expect(modulePattern.resetCounter()).toBe('counter value prior to reset: 2');
});

test('Test incrementCounter method again: 0.', () => {
  expect(modulePattern.incrementCounter()).toBe(0);
});
