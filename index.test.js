const patterns = require('./index');

// trying out tests on index 
test('Test incrementCounter method: 0.', () => {
  expect(patterns.module.incrementCounter()).toBe(0);
});

test('Test incrementCounter method again: 1.', () => {
  expect(patterns.module.incrementCounter()).toBe(1);
});

test('Test resetCounter method.', () => {
  expect(patterns.module.resetCounter()).toBe('counter value prior to reset: 2');
});

test('Test incrementCounter method again: 0.', () => {
  expect(patterns.module.incrementCounter()).toBe(0);
});
