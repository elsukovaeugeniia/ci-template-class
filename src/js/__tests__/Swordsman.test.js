import { Swordsman } from '../class/Swordsman.js';
import { Character } from '../character.js';

test('Swordsman: правильно создаётся экземпляр', () => {
  const swordsman = new Swordsman('Воин');

  const expected = {
    name: 'Воин',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(swordsman).toBeInstanceOf(Swordsman);
  expect(swordsman).toBeInstanceOf(Character);
  expect(swordsman).toEqual(expected);
});
