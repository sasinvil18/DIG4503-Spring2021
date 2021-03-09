/*
let numberExample = 5;

const stringExample = "Hello";

const objectExample = {
  propertyExample: 5
};*/

const arrayExample = [
  "Hello",
  "Hi",
  "Hey there",
  "Howdy"
];

/*for(let i = 0; i < arrayExample.length; i++){
  console.log(arrayExample[i]);
}
this is the simplier version of the forEach method
*/

function search(whatToSearchFor){
  let result = "Not Found!";


  //forEach performs the action 
  arrayExample.forEach((value, index) => {
    //console.log(arrayExample[index]);
    //use dot notation to access properties inside objects value.exampleProperty
    if (value.includes(whatToSearchFor)){
      result = value
    }
  });

  return result;
}

console.log(search("i"));
console.log(search("s"));
console.log(search("e"));


/*//map performs the action AND returns something
arrayExample.map((value, index) => {
  console.log(arrayExample[index]);
});*/


/*if (numberExample == objectExample.propertyExample){
  console.log("They are equal!")
}*/


/*if (numberExample == stringExample){
  console.log("They are equal!");
}
//use node index.js to run file
*/