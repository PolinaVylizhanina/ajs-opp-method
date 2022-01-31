import Character from './app';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defens = 25;
  }
}
