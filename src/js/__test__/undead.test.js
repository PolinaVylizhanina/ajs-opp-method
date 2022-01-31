import Undead from '../undead';

test('Must correctly create Undead', () => {
  const expected = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(new Undead('Test', 'Undead')).toEqual(expected);
});

test('Must correctly create Undead', () => {
  const expected = {
    name: 'Test',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(new Undead('Test')).toEqual(expected);
});
