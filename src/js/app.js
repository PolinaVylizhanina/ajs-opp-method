export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('The name must be a string!');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('The name must contain from 2 to 10 letters!');
    }

    const listCharacters = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!listCharacters.includes(type)) {
      throw new Error('The value must be selected from the list: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (!this.health) throw new Error('can’t raise the level');
    this.level += 1;
    this.attack *= 1.2;
    this.defens *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defens / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
