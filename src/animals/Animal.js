export default class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.foodEaten = 0;
    this.species = this.constructor.name;
  }

  eat(food) {
    this.foodEaten++;
    return `${this.name} the ${this.species} eats ${food}.`;
  }

  makeSound() {
    throw new Error('override me');
  }

  getInfo() {
    const { name, age, species, foodEaten } = this;
    return { name, age, species, foodEaten };
  }

  toString() {
    return `${this.species} named ${this.name}, age ${this.age}, food eaten: ${this.foodEaten}`;
  }
}
