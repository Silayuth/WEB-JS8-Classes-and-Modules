class Superhero {
  constructor(name, superpower) {
    this.name = name;
    this.superpower = superpower;
    // console.log("HELLO FROM SUPERCONSTRUCTOR");
  }

  describe() {
    console.log(`I am ${this.name}, and my superpower is ${this.superpower}.`)
  }
}

class Ironman extends Superhero {
  constructor(name, superpower, armorType) {
    super(name, superpower); // Call the parent class constructor
    this.armorType = armorType;
  }

  describeArmor() {
    console.log(`I am ${this.name}, and I wear the ${this.armorType} armor.`)
  }
}

const tonyStark = new Ironman("Iron Man", "genius-level intellect", 'Mark LXXXV');

tonyStark.describe();
tonyStark.describeArmor();
