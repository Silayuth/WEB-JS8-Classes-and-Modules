class Superhero {
  constructor(inputName, inputSuperpower) {
    this._name = inputName;
    this._superpower = inputSuperpower;
  }

  describe() {
    console.log(`I am ${this.name}, and my superpower is ${this.superpower}.`)
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  get superpower() {
    return this._superpower;
  }

}

const tonyStark = new Superhero("Iron Man", "genius-level intellect");
tonyStark.name = "Batman";
console.log(tonyStark.name);