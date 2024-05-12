//constructor is used in place of class in javascript
const Person = function(name, age){
    //this refers to the object that will be created when we use the new keyword with this constructor function.
    this.name = name//set the name and age properties of the object to the values passed when creating the object.
    this.age = age
}
const mine = new Person('shade', 26)// mine is the object created which is automatically return
console.log(mine)

const yours = new Person('jummy', 26)
console.log(yours)

console.log(mine instanceof Person)// to check if this is true
