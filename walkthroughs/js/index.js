class Player {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  loseHealth(att) {
    this.health -= att;
  }
}

class Warrior extends Player {
  constructor(name) {
    super(name);

    this.weapon = "Axe";
  }

  setWeapon(w) {
    this.weapon = w;
  }
}

let player1 = new Warrior("Ben");
console.log(player1);
