const patterns = require('../index');


// Module pattern
test('Test incrementCounter method: 0.', () => {
  expect(patterns.Module.incrementCounter()).toBe(0);
});

test('Test incrementCounter method again: 1.', () => {
  expect(patterns.Module.incrementCounter()).toBe(1);
});

test('Test resetCounter method.', () => {
  expect(patterns.Module.resetCounter()).toBe('counter value prior to reset: 2');
});

test('Test incrementCounter method again: 0.', () => {
  expect(patterns.Module.incrementCounter()).toBe(0);
});


// Module pattern with namespacing and private stuff
// note that the private stuff is console logged and
// can be visually inspected when running the tests
test('Test public variable property.', () => {
  expect(patterns.Namespace.publicVar).toBe('foo');
});

test('Test public function method.', () => {
  expect(patterns.Namespace.publicFunction('BAR')).toBe('BAR!!');
});

test('Test private variable is private.', () => {
  expect(patterns.Namespace.hasOwnProperty('privateVar')).toBe(false);
});

test('Test private method is private.', () => {
  expect(patterns.Namespace.hasOwnProperty('privateMethod')).toBe(false);
});


// revealing module pattern
// note that the private stuff is console logged and
// can be visually inspected when running the tests
test('Test greeting property.', () => {
  expect(patterns.Reveal.greeting).toBe('Would you like a donut?');
});

test('Test get name methed #1.', () => {
  expect(patterns.Reveal.getName()).toBe(undefined);
});

test('Test set name methed.', () => {
  expect(patterns.Reveal.setName('Dale Cooper')).toBe(undefined);
});

test('Test get name methed #2.', () => {
  expect(patterns.Reveal.getName()).toBe(undefined);
});

test('Test prop exists.', () => {
  expect(patterns.Reveal.hasOwnProperty('setName')).toBe(true);
});

test('Test prop exists.', () => {
  expect(patterns.Reveal.hasOwnProperty('getName')).toBe(true);
});
