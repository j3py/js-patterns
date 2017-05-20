const patterns = require('../index');
const cars = [
  {
    // Dodge
    "model": "Dakota",
    "year": "1986",
    "miles": 100000
  },
  {
    // Honda
    "model": "Accord",
    "year": "1996",
    "miles": 80000
  },
  {
    // Tesla
    "model": "S",
    "year": "2016",
    "miles": 1000
  }
];


// Constructor pattern
test('Test Car instances toString methods.', () => {
  for (let i = 0; i < cars.length; i++) {
    let c = cars[i];
    expect(new patterns.Construct(c.model, c.year, c.miles).toString())
      .toBe(c.model + " has done " + c.miles + " miles");
  }
});

test('Test Car instances properties.', () => {
  for (let i = 0; i < cars.length; i++) {
    let c = cars[i];
    let car = new patterns.Construct(c.model, c.year, c.miles);

    console.log("Car instance:", car);

    expect(car.model).toBe(c.model);
    expect(car.year).toBe(c.year);
    expect(car.miles).toBe(c.miles);
  }
});
