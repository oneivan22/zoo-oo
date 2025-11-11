Простая симуляция зоопарка на ванильном JS (ESM). Используются классы `Animal`, `Lion`, `Monkey`, `Penguin` и менеджер `Zoo`.

## Структура

```
zoo-oo/
  src/
    animals/
      Animal.js
      Lion.js
      Monkey.js
      Penguin.js
    Zoo.js
    index.js
  test/
    demo.js
  package.json
```

## Что сделать по шагам

1) Базовый класс `Animal`

- Файл `src/animals/Animal.js`
- Конструктор `(name, age)`
- Поля: `name`, `age`, `foodEaten = 0`, `species = this.constructor.name`
- Методы:
  - `eat = (food) => { ... }` — увеличивает `foodEaten`, возвращает строку/результат
  - `makeSound = () => { throw new Error('override me') }`
  - `getInfo = () => ({ name, age, species, foodEaten })`
  - (опционально) `toString()` для удобного логирования

2) Наследники `Lion`, `Monkey`, `Penguin`

- Файлы в `src/animals/`: `Lion.js`, `Monkey.js`, `Penguin.js`
- Каждый `extends Animal`
- Переопределить `makeSound`
- При необходимости переопределить `eat`
- Добавить уникальные методы: `climb()` для `Monkey`, `swim()` для `Penguin`
- Использовать `super(...)` в конструкторах

3) Класс `Zoo`

- Файл `src/Zoo.js`
- Поля/методы:
  - `animals = []`
  - `addAnimal = (animal) => { ... }`
  - `removeAnimal = (name) => { ... }`
  - `feedAll = (food) => animals.map(a => a.eat(food))`
  - `getReport = () => [{ name, species, foodEaten }, ...]`
  - (опционально) `runDay = () =>` — случайные действия: `eat/sleep/play`

4) Демо-скрипт

- Файл `src/index.js`
- Импортировать `Zoo` и животных, добавить 2–3 экземпляра
- Вызвать `getReport`, `feedAll`, `runDay` и вывести в консоль
# zoo-oo
