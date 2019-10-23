export default class Person{
    constructor(name){
        this.name=name
        this.species='Homo Sapiens'
    }
    speak(){
        return `Hello! I'm ${this.name}`
    }
}