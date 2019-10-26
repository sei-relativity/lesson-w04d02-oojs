export default class person{
    constructor(name){
        this.name = name;
        this.species = 'Homo Sapiens';
    }

    speak(){
        return `Hello I am ${this.name}`;
    }}