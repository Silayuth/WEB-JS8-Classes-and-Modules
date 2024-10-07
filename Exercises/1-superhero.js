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

  /**
   * step 1: ADD describe 3 method()
   * console.log "{superhero name} in {year}"
   */
}


// step 2: Create Superhero Object
// step 3: Run describe 3 method

let date = new Date();
console.log(date.getFullYear());
