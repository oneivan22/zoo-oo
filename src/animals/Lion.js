import Animal from './Animal.js';

export default class Lion extends Animal {
  makeSound() {
    return 'Roaaar!';
  }
  meow() {
    return 'MEOW!';
  }
}
