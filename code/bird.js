export default  class Bird extends Animal {
    constructor(name, age) {
      super(name, 'Belgian Malinois', age, 'Barks'); // call the super class constructor and pass in required parameters
    }
  
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const bear = new Bird('Bear');
  bear.makeSound(); // Bear barks.