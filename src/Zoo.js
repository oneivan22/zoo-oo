export default class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    return `${animal.name} the ${animal.species} has been added to the zoo.`;
  }

  removeAnimal(name) {
    const index = this.animals.findIndex(a => a.name === name);
    if (index !== -1) {
      const [removed] = this.animals.splice(index, 1);
      return `${removed.name} the ${removed.species} has been removed.`;
    }
    return `${name} not found in the zoo.`;
  }

  feedAll(food) {
    return this.animals.map(a => a.eat(food));
  }

  getReport() {
    return this.animals.map(a => a.getInfo());
  }

  runDay() {
    return this.animals.map(a => {
      const actions = ['eat', 'makeSound'];
      const action = actions[Math.floor(Math.random() * actions.length)];
      return action === 'eat' ? a.eat('food') : a.makeSound();
    });
  }
}
