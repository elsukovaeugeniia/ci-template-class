import { Zombie } from '../class/Zombie.js';
import { Character } from '../character.js';

test('Zombie: правильно создаётся экземпляр', () => {
  const zombie = new Zombie('Зомби');

  const expected = {
    name: 'Зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(zombie).toBeInstanceOf(Zombie);
  expect(zombie).toBeInstanceOf(Character);
  expect(zombie).toEqual(expected);
});
