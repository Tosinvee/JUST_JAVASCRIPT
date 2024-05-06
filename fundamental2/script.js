function logger(){
    console.log('my name is oluwatosin')// function body
}
logger()// invoking/calling a function i.e this willl get the code in the FB to be executed

 function fruits(mangoes, pears){
//     //console.log(mangoes,pears)

    return `juice with ${mangoes} mangoes and ${pears} pears`
}
const result =fruits(5, 7);// to use a return value u have to store it in a variable
console.log(result)

function sum (a,b){
    return a+b
}
const outcome = sum(5,6)// 5, 6 are values of the funct parameters
console.log(outcome)

// A NAMED FUCTION i.e FUNCTION DECLARATION
function calcmyAge(birthYear){
    return 2024 - birthYear
}
console.log(calcmyAge(1997))

//AN ANONYMOUS FUNCTION i.e FUNCTION EXPRESSION
const calcmyAge1 = function(birthYear){
    return 2024 - birthYear
}
console.log(calcmyAge1(1997))

//ARROW FUNCTION
const calcmyAge7 = birthYear => 2024 - birthYear
console.log(calcmyAge7(1997))

const retirement = (birthYear, name) =>{
    const age = 2024 - birthYear;
    const retired = 65 - age;
    return `${name} retired at ${retired}`
}
console.log(retirement(1997, 'folashade'))

//FUNCTONS CALLING OTHER FUNCTIONS
const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(mangoes, pears) {
  const mangoPieces = cutPieces(mangoes);
  const pearPieces = cutPieces(pears);

  return `juice with ${mangoPieces} mangoes and ${pearPieces} pears`;
}
const output = fruitProcessor(3, 4);
console.log(output);
