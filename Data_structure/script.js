//DESTRUCTING ARRAY
const resturant = {
    name:'Iya hannah enterprises',
    location:"Gowon Estate",
    categories:['Italian', 'pizzaria', 'vegetarian', 'organic'],
    staterMenu:['focaccia', 'GarlicBread','salad' ],
    mainMenu:['pizza', 'pasta', 'risotto'],
    order: function(starterIndex, mainIndex){
        return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const arr = [1,2,3]

const [x,y,z] = arr
console.log(x,y,z)
console.log(arr)
const [first, second] = resturant.categories
console.log(first,second) 

let [main, ,secondary] =resturant.categories
console.log(main, secondary)
//SWITCHING VARIABLES
const temp = main
main = secondary
secondary = temp
console.log(main, secondary)
//Recives two return value from a function
console.log(resturant.order(2, 0))
const [starter, mainCourse] = resturant.order(2, 0)
console.log(starter, mainCourse)