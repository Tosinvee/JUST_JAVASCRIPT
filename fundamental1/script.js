// let js = "amazing";
// if (js === "amazing") alert("javascript is fun");

// 48 + 50 + 12;
// console.log(48 + 50 + 12);

// // VARIABLE NAME CONVENTION
// let person = 'shade';
// let PI = 3.415;

// let myFavoriteFood = 'banana'
// console.log(myFavoriteFood) 

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // TO GET THE TYPE OF OPERATION
// console.log(typeof true)
// console.log(typeof 23)

// javascriptIsFun = 'YES'
// //REASSIGNING  javascriptIsFun
// console.log( typeof javascriptIsFun);

// UNDEFINED
// let year;
// console.log(year);
// console.log(typeof year);

//VARIABLE DECLARATION
// let age = 30; //MUTABLE VARIABLE
// age = 33; // THE VARIABLE WAS MUTATED i.e REASSIGN
 
// const birtYear = 1997; // TO DECLARE A VARIABLE THAT CANT BE REASSIGN
// //OUTPUT IS ERROR
// birtYear = 2005;// IMMUTABLE VARIABLE

//MATH OPERATORS
// const ageShade = 2024 - 1997;
// const ageBusayo = 2024 - 1996;
// console.log(ageShade, ageBusayo)

// console.log(ageBusayo * 2, ageShade / 2)

// //plus operator can be used to concatenate string
// const firstName = 'shade';
// const lastName = 'Bayode';
// console.log(firstName + ' ' + lastName)// adding an empty string to add space betweeen them

// //ASSIGNMENT OPERATOR
// let x = 10 + 5; //15
// x += 10 // x = x + 10 = 25
// x *= 4 //100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x)

// //COMPARISON OPERATORS
// console.log(ageBusayo > ageShade) // >,<,<=,>=
// console.log(ageShade >= 18)

// //STRINGS
// const name ="shade"
// const job = "backend developer"
// const favFood = "beans and bread"

// console.log("i'm" + " " + name +", a " + job)

// //TEMPLATE literals using backticks
// console.log(`I'm ${name}, a ${job}`)


//lLOGICAL OPERATORS
// const hasDriverslicense = true
// const hasGoodVision = false

// console.log(hasDriverslicense && hasGoodVision);
// console.log(hasDriverslicense || hasGoodVision);
// console.log(!hasDriverslicense)

// if(hasDriverslicense && hasGoodVision){
//     console.log('sarah is able to drive')
// }else{
//     console.log('someone else should drive')
// }

// if(hasDriverslicense || hasGoodVision){
//     console.log('sarah is able to drive')
// }else{
//     console.log('someone else should drive')
// }

//SWITCH STATEMEMT
// const day = 'monday'

// switch(day){
//     case 'monday':
//         console.log('i learn javascript')
//         break;
//         case 'Tuesday':
//         console.log('sew')
//         break;
//         case 'Wednesday':
//         console.log('go for mid week service')
//         break;
//         case 'Thursday':
//         console.log('go for rehersal')
//         break;
//         case 'Friday':
//         console.log('go to the gym')
//         break;
//         case 'Saturday':
//         case 'Sunday':
//         console.log('i learn javascript')
//         break;
//         default:
//             console.log('not a valid day😂')

//THE CONDITIONAL (TERNARY) OPERATOR
const age = 23
// age >= 18 ? console.log('i like to drink wine') : console.log('i like t water')

const drink = age >= 18 ? 'wine' : 'water'// wine will only be served for som1 who is greater than or equals 18
console.log(drink)