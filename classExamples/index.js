//when we talk about Javascript, we are talking about the newer version which is ES6
//new keywords - let and const to declare variables
//value will probably change
let varTest = 5;

//value will not or should not change
const varTest2 = 6;

function functionTest1() {

}

//arrow function
const functionTest = () => {

}


//Document Object Model - DOM
//a way of looking at a webpage as an object
//using class names and ids of elements
//querySelector()

//Objects
//MERN - working on N (node) now

//all languages are invented
//programing lanugages are used to talk to the computer
//computers are dumb but we think they are smart because they are fast

//object - a collection of values we have put together
// when we talk about objects we mostly talk about their properties (indiviual value in an object)


const color = "orange";
const legs = 4;
const hasTail = true;

//put all of the properties into one object
const catFirst = {
    color: "orange",
    legs: 4,
    hasTail: true
};

//curly brackets = object
//properties must be sepertaed by a comma except for the last one. The semicolon goes after the end curly bracket
//a colon replaces the equal sign when declaring the values in an object
//hover over the object name and it will shoow you the types of all the values

//functions are a type of value
//method is a function in an object
const cat = {
    color: "orange",
    legs: 4,
    hasTail: true,
    example: function(){
        console.log('Hi');
    }
};

//dot notation
//used to access a value in an object
const saveColor = cat.color;

cat.example();

//keywords: super, class (class names are uppercase), constructor, this.
//a constructor is like a blueprint/cookie cutter object literal in a sense (reference class notes on webcourses)
//use this. to reference a property in a method from that object
