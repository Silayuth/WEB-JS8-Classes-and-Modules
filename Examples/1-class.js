class Superhero {
  constructor(name, superpower) {
    this.name = name;
    this.superpower = superpower;
  }

  describe() {
    console.log(`I am ${this.name}, and my superpower is ${this.superpower}.`)
  }
  
  describe2() {
    console.log(`${this.name} has ${this.superpower} ability.`)
  }
}

const superman = new Superhero('Superman', 'super strength');
superman.describe();
superman.describe2();

// const batman = new Superhero('Batman', 'super strength');
// superman.describe();
// superman.describe2();

// const date = new Date();
// console.log(date.getMonth());