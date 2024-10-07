class Superhero {
  constructor(name, superpower) {
    this.name = name;
    this.superpower = superpower;
  }

  fight() {
    console.log(`${this.name} is flighting with ${this.superpower}!`)
  }
}

/*
  step 1: create Class UpgradeSuperhero extends Superhero
  step 2: create Method describeArmor
*/

const tonyStark = new UpgradeSuperhero("Iron Man", "genius-level intellect", 'Mark LXXXV');

tonyStark.fight();
tonyStark.describeArmor();
