export class Character {
  constructor(name, type) {
    
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }

    
    const validTypes = [
      'Bowman', 'Swordsman', 'Magician',
      'Daemon', 'Undead', 'Zombie'
    ];

    
    if (!validTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }

   
    this.name = name;
    this.type = type;
    this.health = 100;  
    this.level = 1;     

    
    if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman' || type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }
}