//constructor is used in place of class in javascript
const Person = function(name, birthYear){
    //this refers to the object that will be created when we use the new keyword with this constructor function.
    this.name = name//set the name and age properties of the object to the values passed when creating the object.
    this.birthYear = birthYear
}
const mine = new Person('shade', 1997)// mine is the object created which is automatically return
console.log(mine)

const yours = new Person('jummy', 1997)
console.log(yours)

console.log(mine instanceof Person)// to check if this is true

//PROTOTYPES
//console.log(Person.prototype)
Person.prototype.calcAge = function(){
    console.log(2024 - this.birthYear)
}
//Any object created from a constructor function will have acess to its method and properties 
mine.calcAge()
Person.prototype.species = 'Homo Sapiens'
console.log(mine.species)
