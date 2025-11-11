import Zoo from './Zoo.js';
import Animal from './animals/Animal.js';
import Lion from './animals/Lion.js';
import Monkey from './animals/Monkey.js';
import Penguin from './animals/Penguin.js';

const zoo = new Zoo();

const Simba = new Lion('Simba', 5);
const Sanya = new Monkey('Sanya', 3);
const Dodep = new Penguin('Dodep', 4);

console.log(zoo.addAnimal(Simba));
console.log(zoo.addAnimal(Sanya));
console.log(zoo.addAnimal(Dodep));

console.log('\nFeeding all animals:');
console.log(zoo.feedAll('fish').join('\n'));

console.log('\nZoo report:');
console.log(zoo.getReport());

console.log('\nA random day in the zoo:');
console.log(zoo.runDay().join('\n'));

console.log('\nFeeding all animals:');
console.log(zoo.feedAll('meat').join('\n'));

console.log('\nZoo report:');
console.log(zoo.getReport());

console.log('\nAll sound:');
console.log(Dodep.makeSound());
console.log(Dodep.swim());
console.log(Sanya.makeSound());
console.log(Sanya.climb());
console.log(Simba.makeSound());
console.log(Simba.meow());

