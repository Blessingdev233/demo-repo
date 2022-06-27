//Classes 

class Animal {
   constructor() {
   	console.log('Created a new instance')

   }

}

const animal = new Animal();

//using 'this'


class Animal {
  constructor() {
    // Assign the string value "Leo" to the name property
      this.name = "Leo";
    
    // Assign the value "3" to the age property
    this.age = 3;
  }
}

const animal = new Animal();

// Print 「Name: ____」
console.log(`Name: ${animal.name}`);

// Print 「Age: ____」
console.log(`Age: ${animal.age}`);

