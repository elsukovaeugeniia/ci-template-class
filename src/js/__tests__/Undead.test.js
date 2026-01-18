import { Undead } from '../class/Undead.js';
import { Character } from '../character.js';

test('Undead: правильно создаётся экземпляр', () => {
  const undead = new Undead('Нежить');

  const expected = {
    name: 'Нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  expect(undead).toBeInstanceOf(Undead);
  expect(undead).toBeInstanceOf(Character);
  expect(undead).toEqual(expected);
});
