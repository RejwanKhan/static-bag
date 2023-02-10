const Bag = require("./Bag");

describe("Bag class", () => {
  //bag has weight
  test("bag has weight", () => {
    const bag = new Bag(15);
    expect(bag.weight).toBe(15);
  });
  //if bag has no weight, return error
  test("bag has no weight to return an error", () => {
    expect(() => new Bag()).toThrowError("bag needs weight");
  });

  test("bag has maximum weight", () => {
    const bag1 = new Bag(23);
    expect(Bag.maximumWeight).toBe(23);
  });

  test("bag exceeds maximum weight throws error", () => {
    expect(() => new Bag(24)).toThrowError("bag exceeds maximum weight");
  });
});
