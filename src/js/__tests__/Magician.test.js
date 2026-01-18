import { Magician } from '../class/Magician.js';
import { Character } from '../character.js';

test('Magician: правильно создаётся экземпляр', () => {
  const magician = new Magician('Маг');

  const expected = {
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(magician).toBeInstanceOf(Magician);
  expect(magician).toBeInstanceOf(Character);
  expect(magician).toEqual(expected);
});
