const resturant = {
    name:'Iya hannah enterprises',
    location:"Gowon Estate",
    categories:['Italian', 'pizzaria', 'vegetarian', 'organic'],
    staterMenu:['focaccia', 'GarlicBread','salad' ],
    mainMenu:['pizza', 'pasta', 'risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open:11,
            close:23,
        },
        sat: {
            open:0,
            close:24,
        },

    },
    order: function(starterIndex, mainIndex){
        return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex, mainIndex, time, address}){
        console.log(`order received! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to the ${address} at ${time}`)
    }, 
};


// resturant.orderDelivery({
//     time:'22:30',
//     address: 'gowon estate church village',
//     mainIndex: 2,
//     starterIndex: 2
// })
////////////////////////DESTRUCTING OBJECTS/////////////////////////////////
// const {name, openingHours, categories} = resturant
// console.log(name, openingHours, categories)

// const{
//     name: resturantName,
//     openingHours:hours,
//     categories: tags, 
// } = resturant;
// console.log(resturantName, hours, tags)
// //DEFAULT VALUE
// const{menu = [], staterMenu:starters =[]} =resturant;
// console.log(menu, starters)
//MUTATING VARIABLES
// let a = 111
// let b = 999
// const obj = {a:23, b:7, c:14}
// ({a, b} = obj)
// console.log(a, b)



//////////////////////////ARRAY/////////////////////////////////////////
// //DESTRUCTING ARRAY`
// const arr = [1,2,3]

// const [x,y,z] = arr 
// console.log(x,y,z)
// console.log(arr)
// const [first, second] = resturant.categories
// console.log(first,second) 

// let [main, ,secondary] =resturant.categories
// console.log(main, secondary)
// //SWITCHING VARIABLES
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)

// //Receives two return value from a function
// console.log(resturant.order(2, 0))
// const [starter, mainCourse] = resturant.order(2, 0)
// console.log(starter, mainCourse)

//////////////////////////SPREAD OPERATOR///////////////////////////////////////
//SPREAD OPERATOR
// const array =[4,5,6]
// const newArr = [1,2,3,...array]
// console.log(newArr)// take all element out of the array and writes them manually
// console.log(1,2,3,array)
// console.log(...newArr)// logs the individual element of the array

//copy array
// const menu = [...resturant.mainMenu]

// //Join 2 arrays
// const menuComb = [...resturant.staterMenu, ...resturant.mainMenu]
// console.log(menuComb)

// //spread method on strings
// const name = 'jonas'
// const letters = [...name, ' ', 'S']
// console.log(letters)
// console.log(...name)

// //REAL WORLD EXAMPLE
// //objects with spread operator
// const newResturant = {
//     foundedIn: 2008, ...resturant, founder:'Aderonke Bayode'
// }
// console.log(newResturant)

// const resturantCopy = {...resturant}
// resturantCopy.name = 'IYA HANNAH ENT'
// console.log(resturantCopy) 

/////////////////////REST PATTERN///////////////////////////////////
//DESTRUCTURING
//SPREAD because on RIGHT side of =
// const arr = [1,2, ...[3,4]];
// console.log(arr)

// const arrry = [1,2,3.4,5]
// console.log(arrry)
// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)

// const[pizza, ...otherFood] = [...resturant.mainMenu, ...resturant.staterMenu]
// console.log(pizza, otherFood)

const {sat, ...weekDays} = resturant.openingHours
console.log( weekDays)

//2) REST PARAMETERS IN FUNCTIONS
const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)sum +=
    numbers[i]
    console.log(sum)
};
add(2, 3)
add(5, 3, 7, 2)
add(8, 6, 7,5,1,4)

const x = [23, 5, 7]
add(...x)


/////////////////////FOR LOOP///////////////////
const menu = [...resturant.staterMenu, ...resturant.mainMenu]
for(const item of menu) console.log(item)

for(const [index, element] of menu.entries()){
    console.log(`${index + 1}:${element}`)
}