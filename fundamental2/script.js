// function logger(){
//     console.log('my name is oluwatosin')// function body
// }
// logger()// invoking/calling a function i.e this willl get the code in the FB to be executed

//  function fruits(mangoes, pears){
// //     //console.log(mangoes,pears)

//     return `juice with ${mangoes} mangoes and ${pears} pears`
// }
// const result =fruits(5, 7);// to use a return value u have to store it in a variable
// console.log(result)

// function sum (a,b){
//     return a+b
// }
// const outcome = sum(5,6)// 5, 6 are values of the funct parameters
// console.log(outcome)

// // A NAMED FUCTION i.e FUNCTION DECLARATION
// function calcmyAge(birthYear){
//     return 2024 - birthYear
// }
// console.log(calcmyAge(1997))

// //AN ANONYMOUS FUNCTION i.e FUNCTION EXPRESSION
// const calcmyAge1 = function(birthYear){
//     return 2024 - birthYear
// }
// console.log(calcmyAge1(1997))

// //ARROW FUNCTION
// const calcmyAge7 = birthYear => 2024 - birthYear
// console.log(calcmyAge7(1997))

// const retirement = (birthYear, name) =>{
//     const age = 2024 - birthYear;
//     const retired = 65 - age;
//     return `${name} retired at ${retired}`
// }
// console.log(retirement(1997, 'folashade'))

// //FUNCTONS CALLING OTHER FUNCTIONS
// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(mangoes, pears) {
//   const mangoPieces = cutPieces(mangoes);
//   const pearPieces = cutPieces(pears);

//   return `juice with ${mangoPieces} mangoes and ${pearPieces} pears`;
// }
// const output = fruitProcessor(3, 4);
// console.log(output);

//ARRAY
// const friends = ['shade','tosin','busayo']
// console.log(friends)

// const years = new Array(1991,1992,1993)
// console.log(years)

// console.log(friends[2])// to get the content in index2 of the array 
// console.log(friends.length)// to get the lenght of the array
// friends[2] = 'jummy'
// console.log(friends)

// // USING ARRAY FOR OPERATIONS
// const calcAge = function (birthYears){
//     return 2024 - birthYears
// }
// const ages = [1990, 1991, 1992]
// const ageA = calcAge(ages[0])
// const ageB = calcAge(ages[1])
// const ageC = calcAge(ages[2])
// console.log(ageA,ageB, ageC)

//ARRAY METHODS
// const friends = ['shade','tosin','busayo']
// friends.push('aduke')//add element to the last array
// console.log(friends)
// friends.unshift('bussy')// add element to the first letter of an array
// console.log(friends)
// friends.pop()// deletes the last element of the array
// console.log(friends)
// friends.shift()//deletes the last elemet of the array
// console.log(friends)
// console.log(friends.indexOf('tosin'))// return the index of which tje element is located

 //OBJECTS
//  const mine = {
//     firstName:'shade',
//     lastName:'Baayode',
//     age:17,
//     friends:['tosin','bussy','jummy']
//  }
//  console.log(mine)
 
//  console.log(mine.lastName)//DOT NOTATION
//  console.log(mine['lastName'])//BRACKET NOTATION

//OBJECT METHODS i.e any function attached to an object is calle a method
const mine ={
   firstNmae: 'shade',
   lastName:'Bayode',
   birthYear: '1997',
   friends:['tosin','bussy','jummy'],
   hasDriversLicense :true,
   calcAge : function(birthYear){
      return 2024 - birthYear
   }
}
console.log(mine.calcAge(1997))// DOT NOTATION the object mine is caling the method calcage
console.log(mine['calcAge'](1997))// BRACKET NOTATION
// USING THIS KEYWORD
const tosin={
   firstName: 'shade',
   lastName:'Bayode',
   birthYear: '1997',
   friends:['tosin','bussy','jummy'],
   hasDriversLicense :true,
   calcAge : function(){
      return 2024 - this.birthYear
   },
   mySummary: function (){
       return `${this.firstName} is a ${this.calcAge()}-years old lady and  she has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
   }
   
}
console.log(tosin.calcAge())
console.log(tosin.mySummary())
