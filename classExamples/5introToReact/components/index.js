//components model
//similar to objects but applied within web development by having an group of html, js, css rather than different properties
//how do we put these three different languages together? We can transalate all three languages into one language

//react was created at facebook

//translating css to javascript
//css is just objects with properties

//the solution to translating html over was to just get rid of html and replace it with something else -> XML

//XML
//only one root element - can be seen in html with it having everything in the html tag as well as the components that are in each of the tags that are present and all of them collapsing down to one root element (<html>)
//converting attributes (class, id, etc.) -> we take all the elements and their attributes and translating them to javascript with properties describing objects just as attributes describe elements

//JavaScript XML (JSX)
//single root element
//all elements must close - no single opening tags! (ex. <img> tag in HMLL)
//JS expressions(variables, objects, and functions)(anything that produces a value)
//CANT USE: if(), else(), for(), while() because they don't produce values and they just control how code works
//expressions are enclosed in curly brackets{} which marks it as JSX

let value = 5
let paragraph =
<div>
    {value}
</div>

//Parsers - technical term for parsing
/* Three Parsers
    JSX
    Babel
    WebPack
*/
//JSX is parsed first and then it is converted to JS behind the scenes
//it then parses through BABEL that looks at JS ES6 and adds pollyfills to allow the code to work in an ES5 setting
//use WebPack to package it so that it can be used in browsers

//REACT COMPONENTS
//all components are elements
//all components (can) render

/*<div>
  <Example />
</div>*/

//React would assume is a class because is starts with a capital letter like classes do in JS

//can find a review of document-wide access of JS in the modules