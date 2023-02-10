class Bag {
  static maximumWeight = 23;

  constructor(weight) {
    if (!weight) {
      throw new Error("bag needs weight");
    }
    if (weight > Bag.maximumWeight) {
      throw new Error("bag exceeds maximum weight");
    }
    this.weight = weight;
  }
}

module.exports = Bag;
