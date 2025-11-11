import Animal from './Animal.js';

export default class Monkey extends Animal {
  makeSound() {
    return 'Oo-oo-aa-aa!';
  }

  climb() {
    return `${this.name} climbs a tree.`;
  }
}
