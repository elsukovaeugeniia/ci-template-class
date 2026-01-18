import { Bowman } from '../class/Bowman.js';
import { Character } from '../character.js';

test('Bowman: правильно создаётся экземпляр', () => {
  const bowman = new Bowman('Лучник');

  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(bowman).toBeInstanceOf(Bowman);
  expect(bowman).toBeInstanceOf(Character);
  expect(bowman).toEqual(expected);
});
