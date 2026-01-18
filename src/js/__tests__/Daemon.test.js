import { Daemon } from '../class/Daemon.js';
import { Character } from '../character.js';

test('Daemon: правильно создаётся экземпляр', () => {
  const daemon = new Daemon('Демон');

  const expected = {
    name: 'Демон',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  expect(daemon).toBeInstanceOf(Daemon);
  expect(daemon).toBeInstanceOf(Character);
  expect(daemon).toEqual(expected);
});
