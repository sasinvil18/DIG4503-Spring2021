//node package manager - npm
//there is node, npm, and a third one we will talk about later

//anytime we're using node, we need to create a new node project

//mkdir (name) to make a new directory
//cd means change directory
//npm init
//this then creates a package.JSON which is a file that has object notation and has a few properties

//object literalas are different than object notations because object notations have quotations around its property names

//npmjs.com is where you can go to search different node packages
//npm install chalk (this added a package-lock and node_modules)
//because I cloned it from the respository, professor added an ignore feature so that node_modules will not upload to github because it will contain a lot of stuff to keep uploading

//special key words to work across files
//added "type": "module" after dependencies in package.json to enable a new type of support because node.js predates JavaScript
//allows us to use new keywords (input and export)

import chalk from "chalk";
//greyed out  because not used yet

import Person from "./Person.js";

const s = new Person("Sarah", "#0000FF")
s.speak();
//to run type node (filename)

