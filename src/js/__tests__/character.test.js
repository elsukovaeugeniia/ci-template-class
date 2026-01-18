import { Character } from '../character.js';

test('Character: создаёт персонажа с правильными данными', () => {
  const char = new Character('Том', 'Bowman');

  expect(char.name).toBe('Том');
  expect(char.type).toBe('Bowman');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBeUndefined();   // в родительском классе — undefined
  expect(char.defence).toBeUndefined(); // задаётся в дочерних
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
