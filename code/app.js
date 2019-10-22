const celica = {
  model: "Toy-yoda celica",
  color: "red",
  fuel: 100,
  drive: function() {
    this.fuel--;
  },
  refuel: function() {
    this.fuel = 100;
  },
  makeCar: function(model,color) {
      this.model = model;
      this.color = color;
  }
};

const civic = {
  model: "Honda Civic",
  color: "hotpink",
  fuel: 100,
  drive: function() {
    this.fuel--;
  },
  refuel: function() {
    this.fuel = 100;
  }
};

celica.makeCar("Toy-yoda Celica", "limegreen");
console.log(celica);

// Function to make a Object
const makeCar = function(model, color, fuel = 50) {
    return {
        model: model,
        color: color,
        fuel: fuel
    };
};




// Constructor for Car class
class Car {
    constructor(model, color){
      this.model = model;
      this.color = color;
      this.fuel = 100;
    }
    drive(){
      this.fuel--;
      return "Vroom!";
    }
    refuel(){
      this.fuel = 100;
    }
  } //End Car
  
  // New Car save to Constructor
  const celica = new Car("Toy-Yoda Celica", "limegreen");
  const civic = new Car("Honda Civic", "lemonchiffon");

  console.log(celica.drive());



// Constructor for Person class
class person{
    constructor(name){
        this.name = name;
        this.species = 'Homo Sapiens';
    }

    speak(){
        return `Hello! I'm ${this.name}?`;
    }

  }// End Person
  const muhannad = nem person('muhannad');
  console.log(muhannad.speak());
  
  const Norah = nem person('Norah');
  console.log(Norah.speak());

  const people = [muhannad, Norah];



  // Constructor for Animal class
  class Animal{
      constructor(name, tybe, age, sound, hasPassport = false){
          this.name = name;
          this.tybe = tybe;
          this.age = age;
          this.sound = sound;
          this.hasPassport = hasPassport;
      }

      getOlder(){
          this.age++;
          console.log('Age:', this.age); 
      }

      makeSound(){
          return `${this.sound}! Hello, I'm a ${this.type}. And I'm ${this.age} years old.`;
      }
  }

  const notMyCat = new Animal('Joe','cat',2,'mooo');
  console.log(notMyCat.makeSound());
  notMyCat.getOlder();
  console.log(notMyCat.makeSound());



  // Bird calss child of Animal
class Bird extends Animal {
      //inheritance Varebles from Animal constructor
        constructor(name, age, canFly = true) {
     super(name, 'bird', age, 'Barks');
     this.canFly = canFly;
     console.log('Do passport?', this.hasPassport);
   }

   makeSound(){
       console.log(`${this.name} koko.`);
   }
} // End Bird

const bear = new bird('bear', 5,);
console.log(bear.makeSound() );
bear.getOlder();
console.log(bear.makeSound() );

  
  