import Character from '../app';
import Bowerman from '../bowerman';

test('Should correctly create a character', () => {
  const expected = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowerman')).toEqual(expected);
});

test('Should throw an error if name is not a string', () => {
  expect(() => new Character(44, 'Bowerman')).toThrowError('The name must be a string!');
});

test('Should throw an error if name does not consider 2 - 10 literas', () => {
  expect(() => new Character('b', 'Bowerman')).toThrowError('The name must contain from 2 to 10 letters!');
  expect(() => new Character('htyjfhvhgkygy')).toThrowError('The name must contain from 2 to 10 letters!');
});

test('if value is not in the list, throws an error', () => {
  expect(() => new Character('Human')).toThrowError('The value must be selected from the list: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie!');
});

test('Should level up', () => {
  const bowerman = new Bowerman('Test', 'Bowerman');
  bowerman.levelUp();
  const result = {
    name: 'Test',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defens: 30,
  };

  expect(bowerman).toEqual(result);
});

test('Error level up', () => {
  expect(() => {
    const bowerman = new Bowerman('Test', 'Bowerman');
    bowerman.health = 0;
    bowerman.levelUp();
    throw new Error('can’t raise the level');
  }).toThrow();
});

test('Should take a damage', () => {
  const bowerman = new Bowerman('Test', 'Bowerman');
  bowerman.damage(10);
  expect(bowerman.health).toEqual(92.5);
});

test('Should damage correctly', () => {
  const bowerman = new Bowerman('Test', 'Bowerman');
  bowerman.health = -10;
  bowerman.damage(100);
  expect(bowerman.health).toEqual(0);
});
