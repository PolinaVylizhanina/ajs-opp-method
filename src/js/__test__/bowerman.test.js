import Bowerman from '../bowerman';

test('Must correctly create Bowerman', () => {
  const expected = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(new Bowerman('Test', 'Bowerman')).toEqual(expected);
});
test('Must correctly create Bowerman', () => {
  const expected = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(new Bowerman('Test')).toEqual(expected);
});
