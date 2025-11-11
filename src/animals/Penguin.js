import Animal from './Animal.js';

export default class Penguin extends Animal {
  makeSound() {
    return 'Honk!';
  }

  swim() {
    return `${this.name} swims gracefully.`;
  }
}
