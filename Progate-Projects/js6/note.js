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



//using constructor with arguments

class Animal {
  // Add the arguments name and age 
  constructor(name, age) {
    // Replace the string value "Leo" with the value of the name argument
    this.name = name;
    
    // Replace the  value "3" with the value of the age argument
    this.age = age;
  }
}

// Add the arguments "Mocha" and 8
const animal = new Animal("Mocha", 8);

console.log(`Name: ${animal.name}`);
console.log(`Age: ${animal.age}`)



//Adding method

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Hello");
  }
  
  // Add the info method
  info() {
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}

const animal = new Animal("Leo", 3);
animal.greet();

// Call the info method using the animal constant
animal.info();
