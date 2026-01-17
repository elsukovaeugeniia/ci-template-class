import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character.js';

test('создаёт персонажа с правильными данными', () => {
  const char = new Character('Том', 'Bowman');

  expect(char.name).toBe('Том');
  expect(char.type).toBe('Bowman');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(25);
});


test('ошибка: имя слишком короткое', () => {
  expect(() => new Character('А', 'Bowman'))
    .toThrow('Имя должно быть от 2 до 10 символов');
});

test('ошибка: имя слишком длинное', () => {
  expect(() => new Character('ОченьДлинноеИмя', 'Bowman'))
    .toThrow('Имя должно быть от 2 до 10 символов');
});


test('ошибка: неверный тип персонажа', () => {
  expect(() => new Character('Том', 'King'))
    .toThrow('Некорректный тип персонажа');
});


test('Bowman: атака 25, защита 25', () => {
  const bowman = new Bowman('Лучник');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('Swordsman: атака 40, защита 10', () => {
  const swordsman = new Swordsman('Воин');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Magician: атака 10, защита 40', () => {
  const magician = new Magician('Маг');
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Daemon: атака 10, защита 40', () => {
  const daemon = new Daemon('Демон');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('Undead: атака 25, защита 25', () => {
  const undead = new Undead('Нежить');
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Zombie: атака 40, защита 10', () => {
  const zombie = new Zombie('Зомби');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});