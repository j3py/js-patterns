const patterns = require('../index');


// Module pattern
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


// Module pattern with namespacing and private stuff
// note that the private stuff is console logged and
// can be visually inspected when running the tests
test('Test public variable property.', () => {
  expect(patterns.namespace.publicVar).toBe('foo');
});

test('Test public function method.', () => {
  expect(patterns.namespace.publicFunction('BAR')).toBe('BAR!!');
});

test('Test private variable is private.', () => {
  expect(patterns.namespace.hasOwnProperty('privateVar')).toBe(false);
});

test('Test private method is private.', () => {
  expect(patterns.namespace.hasOwnProperty('privateMethod')).toBe(false);
});
