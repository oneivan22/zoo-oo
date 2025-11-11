import assert from 'node:assert/strict';
import { Animal } from '../src/animals/Animal.js';
import { Lion } from '../src/animals/Lion.js';
import { Monkey } from '../src/animals/Monkey.js';
import { Penguin } from '../src/animals/Penguin.js';
import { Zoo } from '../src/Zoo.js';

// Basic inheritance and methods
const a = new Animal('Test', 1);
assert.equal(a.foodEaten, 0);
assert.equal(typeof a.makeSound, 'function');
assert.throws(() => a.makeSound());
assert.equal(a.eat(2).includes('ate 2'), true);
assert.equal(a.foodEaten, 2);

const l = new Lion('Leo', 4);
assert.equal(l.makeSound(), 'Roar!');
const beforeLion = l.foodEaten;
l.eat(3);
assert.equal(l.foodEaten, beforeLion + 3);

const m = new Monkey('Mo', 2);
assert.equal(typeof m.climb, 'function');
assert.equal(m.makeSound(), 'Ooh-ooh-aah-aah!');

const p = new Penguin('Pen', 2);
assert.equal(typeof p.swim, 'function');
assert.equal(p.makeSound(), 'Honk!');

const zoo = new Zoo('Demo Zoo');
zoo.addAnimal(l);
zoo.addAnimal(m);
zoo.addAnimal(p);
assert.equal(zoo.animals.length, 3);
assert.equal(zoo.removeAnimal('Unknown'), false);
assert.equal(zoo.removeAnimal('Mo'), true);
assert.equal(zoo.animals.length, 2);

const eaten = zoo.feedAll(1);
assert.equal(Array.isArray(eaten), true);
assert.equal(zoo.getReport().every((r) => typeof r.foodEaten === 'number'), true);

console.log('All demo tests passed.');

