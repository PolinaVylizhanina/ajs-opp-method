import Zombie from '../zombie';

test('Must correctly create Zombie', () => {
  const expected = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Zombie('Test', 'Zombie')).toEqual(expected);
});

test('Must correctly create Zombie', () => {
  const expected = {
    name: 'Test',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(new Zombie('Test')).toEqual(expected);
});
