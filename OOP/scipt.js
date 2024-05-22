//constructor is used in place of class in javascript
// const Person = function(name, birthYear){
//     //this refers to the object that will be created when we use the new keyword with this constructor function.
//     this.name = name//set the name and age properties of the object to the values passed when creating the object.
//     this.birthYear = birthYear
// }
// const mine = new Person('shade', 1997)// mine is the object created which is automatically return
// console.log(mine)

// const yours = new Person('jummy', 1997)
// console.log(yours)

// console.log(mine instanceof Person)// to check if this is true


////////////////////////////////////////////
// //PROTOTYPES
// //console.log(Person.prototype)
// Person.prototype.calcAge = function(){
//     console.log(2024 - this.birthYear)
// }
// //Any object created from a constructor function will have acess to its method and properties 
// mine.calcAge()
// Person.prototype.species = 'Homo Sapiens'
// console.log(mine.species)//not owned property

// console.log(mine.__proto__)
// console.log(mine.__proto__.__proto__)
// console.log(mine.__proto__.__proto__.__proto__)


///////////////////////////////////////////////////////
// ES6 CLASSES
//const PersonCl = class {}  // CLASS EXPRESSION
//class DECLARATION
// class PersonCl{
//     constructor(fullName,birthYear) {
//         this.fullName = fullName
//         this.birthYear = birthYear
//     }
//     calcAge(){
//         console.log(2014-this.birthYear)
//     }
//     get age(){
//         return(2024 - this.birthYear)
//     }
//     set fullName (name){
//         console.log(name)
//         if(name.includes(' ') )this._fullname = name
//         else{
//             console.log(`${name} is not a fullname`)
//         }
//     }
//     get fullName(){
//         return this._fullname
//     }
// }
// const mine = new PersonCl('tosin bayode', 1997)
// console.log(mine)
// mine.calcAge()
// console.log(mine.age)
// const yours = new PersonCl('tosin', 1997)// this will work with else

// const account = {
//     owner:"tosin",
//     movement:[100, 200, 300,150],

//     get latest(){
//        return this.movement.slice(-1).pop(); 

//     },

//     set latest(mov){
//         this.movement.push(mov)
//     }

// }
// console.log(account.latest)
// account.latest = 50
// console.log(account.movement)


///////////////////////////////////////////////////
// // OBJECT.CREATE
// const PersonProto = {
//     calcAge (){
//         console.log(2024 - this.birthYear)
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName
//         this.birthYear = birthYear
//     },
// }
// const outcome = Object.create(PersonProto)
// console.log(outcome)
// outcome.name = "tosin"
// outcome.birthYear = 2006
// outcome.calcAge()

// const shade = Object.create(PersonProto)
// shade.init("kenny", 1999)
// shade.calcAge()


////////////////////////////////////////////////////////////
//INHERITANCE BETWEEN CLASSES CONSTRUCTOR FUNCTION
const Pperson = function (firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
}
Pperson.prototype.calcAge = function(){
    console.log(2024 - this.birthYear)
}
const Student = function(firstName, birthYear,course){
    Pperson.call(this, firstName,birthYear)//to avoid duplicate code between the parent and child    .
    this.course = course
}
//linking prototypes
Student.prototype = Object.create(Pperson.prototype)

Student.prototype.introduce = function(){
    console.log(` i'm ${this.firstName} and i study ${this.course}`)

}
const bussy = new Student('busayo', 1996, 'medicine')
bussy.introduce()
bussy.calcAge()


///////////////////////////////////////////////////////////////
//INHERITANCE BETWEEN ES6 CLASSES
class StudentClass extends Pperson{
    constructor (firstName, birthYear, course){
      //Always needs to happen first because this enable use to access this keyword  
     super (firstName, birthYear)// arg for parent class constructor
     this.course= course
    }
    introduce(){
      console.log(`my name is ${this.firstName} and am studying ${this.course}`)
    }
    
}
const kenny = new StudentClass('shade', 1997, 'slt')
console.log(kenny)
kenny.introduce()
kenny.calcAge()


/////////////////////////////////////////////////////////
//INHERITANCE BETWEEN CLASSES USING OBJECR CREATE
const PersonProto = {
      calcAge (){
          console.log(2024 - this.birthYear)
      },
      init(firstName, birthYear){
          this.firstName = firstName
          this.birthYear = birthYear
      },
  }

  const outcome =Object.create(PersonProto)
  const StudentProto = Object.create(PersonProto)
  StudentProto.init =  function(firstName, birthYear,course){
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course

  }
  const jay = Object.create(StudentProto)
  jay.init('jay', 2020, 'slt')
  jay.calcAge()

  ///////////////////////////////
  //MORE CLASS EXAMPLES
  class Account {
    //private fields
    #movement = [] // this makes movement a provate field so it wont be accessible from anywhere
    constructor (owner, currency,pin){
      this.owner = owner
      this.currency = currency
      this.pin = pin
      //this.movement = []
    //  this.locale = navigator.language
      console.log(`Thanks for banking with us ${owner}`)
    }
    getMovements(){
      return this.#movement

    }
    deposit(val){
      this.#movement.push(val)
    }
    withdraw(val){
      this.deposit(-val)
    }
    approveLoan (val){
      return true
    }
    requestLOan(val){
      if(this.approveLoan(val)){
        this.deposit(val)
        console.log('loan approved')
      }
    }
  }
  const acct1 = new Account('bussy','naira', 1234)
  acct1.deposit(500)
  acct1.withdraw(200)
  acct1.requestLOan(5000)
  console.log(acct1)
  console.log(acct1.getMovements())
   
