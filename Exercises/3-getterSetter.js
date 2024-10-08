class Students {
  constructor(inputName, inputNumber) {
    this._name = inputName;
    this._number = inputNumber;
  }

  showName() {
  }

  editName(newName) {
    this._name = newName;
  }

  // CODE HERE: set name
  // CODE HERE: get name

  // CODE HERE: set number
  // CODE HERE: get number
}

const student = new Students("Kan", 41);

student.name = "Khem";
student.number = 42;

// CODE HERE: display student
// CODE HERE: display student.name
// CODE HERE: display student.number
