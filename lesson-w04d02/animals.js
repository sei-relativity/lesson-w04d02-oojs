
export default class  Animal {
    //if the parameter is assigned to false then its OPTIONAL
    constructor (name, type, age, sound, hasPassport = false ){
        this.name= name;
        this.type=type;
        this.age=age;
        this.sound=sound;
        this.hasPassport =hasPassport;
    }
    getOlder(){
        this.age++;
        console.log("age:", this.age);
    }

    makeSound(){
        return `${this.sound}! hello, I am a ${this.type}. and i am ${this.age} years old `;

    }
}

// const notMyCat = new Animal ("Joe", "cat", 2, "Moo", );

// console.log(notMyCat.makeSound());

// notMyCat.getOlder();
// console.log( notMyCat.makeSound());


class bird extends Animal{
    constructor(name,age, canFly= true){
        super(name, 'bird', age, "Barks" );
        this.canFly = canFly;
        console.log("do passport", this.hasPassport);
    }
    makeSound(){
        console.log(`${this.name} barks.`);
    }
}

const bear = new bird ('Bear', 5);
console.log(bear.makeSound());
bear.getOlder();
console.log(bear.makeSound());
