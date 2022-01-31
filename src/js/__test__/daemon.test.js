import Daemon from '../daemon';

test('Must correctly create Daemon', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defens: 40,
  };
  expect(new Daemon('Test', 'Daemon')).toEqual(expected);
});
test('Must correctly create Daemon', () => {
  const expected = {
    name: 'Test',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defens: 40,
  };
  expect(new Daemon('Test')).toEqual(expected);
});
