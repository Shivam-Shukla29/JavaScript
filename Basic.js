'use strict'
console.log("Hello World!"); // Print output in console

var FirstName = `Shivam`; // Define Variable
console.log(FirstName);

let LastName = `Shukla`; // Define Varibale
console.log(LastName);

const FullName =`My name is Shivam Shukla`; //Define Constant
console.log(FullName);

let strlen1 = FirstName.length; // To Find String Length
let strlen2 = LastName.length;
console.log(`The length of my name is ${strlen1} and length of my last name is ${strlen2}`); // String Concatination

var myArray = [["Shivam",22,1998],["Aman",21,1998],["Mohit",23,1997]]; // Nested Array
var myData = myArray[0][2];
console.log(myData);

function myFunction(a,b) // Passing Arguments in Function
{
    console.log(a-b);
}

myFunction(10,5);
