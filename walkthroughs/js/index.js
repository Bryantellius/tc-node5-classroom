// RPG Game

class Player {
  constructor() {
    this.name;
    this.maxHealth = 3;
    this.overallLevel = 1;
    this.boardPosition = 0;
  }

  move() {
    let moved = Math.round(Math.random() * 6);
    this.boardPosition += moved;
    console.log(
      `${this.name} moved ${spaces} space(s) and is now at ${this.boardPosition}...`
    );
  }

  editName(name) {
    this.name = name;
  }
}

class Warrior extends Player {
  constructor() {
    super();

    this.weapon = "sword";
  }

  attack() {}
}

class Mage extends Player {
  constructor() {
    super();

    this.weapon = "tome";
  }

  attack() {}
}

class Game {
  constructor() {
    this.players = {};
  }

  createPlayers() {
    let playerOneName = prompt("Who is player One?");
    let playerTwoName = prompt("Who is player Two?");

    this.players.p1 = new Warrior();
    this.players.p2 = new Mage();

    this.players.p1.editName(playerOneName);
    this.players.p2.editName(playerTwoName);

    alert(
      `Welcome ${this.players.p1.name} and ${this.players.p2.name}! Ready to code?`
    );
  }

  startGame() {
    alert("Welcome to Dungeon Coders!");

    this.createPlayers();
  }
}

new Game().startGame();
