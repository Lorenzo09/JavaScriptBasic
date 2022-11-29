// Ejercicio 1 "Comment your JavaScript code"

// This is an in-line comment.

/* This is a 
multi-line comment*/

// Ejerecicio 2 "Declare JavaScript Variables"

var ourName;

var myName;

// Ejercicio 3 "Storing Values with the Assignment Operator"

var a;

a=7;

// Ejercicio 4 "Assigning the Value of One Variable to Another"

// Setup
var a;
a = 7;
var b;

var b = a;

//Ejercicio 5 "Initializing Variables with the Assignment Operator"

var a = 9;

// Ejercicio 6 "Declare String Variables"

var myFirstName = "Lorenzo";
var myLastName = "Lacava";

// Ejercicio 7 "Understanding Uninitialized Variables"

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Ejercicio 8 "Understanding Case Sensitivity in Variables"

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Ejercicio 9 "Explore Differences Between the var and let Keywords"

let catName = "Oliver";
let catSound = "Meow!";

// Ejercicio 10 "Declare a Read-Only Variable with the const Keyword"

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Ejercicio 11 "Add Two Numbers with JavaScript"

const sum = 10 + 10;

// Ejercicio 12 "Subtract One Number from Another with JavaScript"

const difference = 45 - 33;

// Ejercicio 13 "Multiply Two Numbers with JavaScript"

const product = 8 * 10;

// Ejercicio 14 "Divide One Number by Another with JavaScript"

const quotient = 66 / 33;

// Ejercicio 15 "Increment a Number with JavaScript"

let myVar = 87;

myVar ++;

// Ejercicio 16 "Decrement a Number with JavaScript"

let myVar = 11;

myVar --;

// Ejercicio 17 "Create Decimal Numbers with JavaScript"

const ourDecimal = 5.7;


let myDecimal = 5.7;

// Ejercicio 18 "Multiply Two Decimals with JavaScript"

const product = 2.0 * 2.5;

// Ejercicio 19 "Divide One Decimal by Another with JavaScript"

const quotient = 4.4 / 2.0; // Change this line

// Ejercicio 20 "Finding a Remainder in JavaScript"

const remainder = 11 % 3;

// Ejercicio 21 "Compound Assignment With Augmented Addition"

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Ejercicio 22 "Compound Assignment With Augmented Subtraction"

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// Ejercicio 23 "Compound Assignment With Augmented Multiplication"

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Ejercicio 24 "Compound Assignment With Augmented Division"

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// Ejercicio 25 "Escaping Literal Quotes in Strings"

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// Ejercicio 26 "Quoting Strings with Single Quotes"

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Ejercicio 27 "Escape Sequences in Strings"

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Ejercicio 28 "Concatenating Strings with Plus Operator"

const myStr ="This is the start. " + "This is the end."; // Change this line

// Ejercicio 29 "Concatenating Strings with the Plus Equals Operator"

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// Ejercicio 30 "Constructing Strings with Variables"

const myName = "Lorenzo";
const myStr = "My name is " + myName + " and I am well!";

// Ejercicio 31 "Appending Variables to Strings"

const someAdjective = "incredible";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Ejercicio 32 "Find the Length of a String"

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// Ejercicio 33 "Use Bracket Notation to Find the First Character in a String"

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; 

// Ejercicio 34 "Understand String Immutability"

let myStr = "Jello World";

myStr = "Hello World"; 

// Ejercicio 35 "Use Bracket Notation to Find the Nth Character in a String"

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]; 

// Ejercicio 36 "Use Bracket Notation to Find the Last Character in a String"

const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1];

// Ejercicio 37 "Use Bracket Notation to Find the Nth-to-Last Character in a String"

const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Ejercicio 38 "Word Blanks"

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "My " + myNoun + " was really " + myAdjective + " and it " + myVerb + " ultra " + myAdverb + ".";

// Ejercicio 39 "Store Multiple Values in one Variable using JavaScript Arrays"

const myArray = ["My name is" + "Lorenzo", 133];

// Ejercicio 40 "Nest one Array within Another Array"

const myArray = [["Hello", 1], ["Bye", 2]];

// Ejercicio 41 "Access Array Data with Indexes"

const myArray = [50, 60, 70];
let myData = myArray[0];

// Ejercicio 42 "Modify Array Data With Indexes"

const myArray = [18, 64, 99];

myArray[0] = 45;

// Ejercicio 43 "Access Multi-Dimensional Arrays With Indexes"

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

// Ejercicio 44 "Manipulate Arrays With push()"

const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);

// Ejercicio 45 "Manipulate Arrays With pop()"

const myArray = [["John", 23], ["cat", 2]];

let removedFromMyArray = myArray.pop();

// Ejercicio 46 "Manipulate Arrays With shift()""

const myArray = [["John", 23], ["dog", 3]];

let removedFromMyArray = myArray.shift();

// Ejercicio 47 "Manipulate Arrays With unshift()"

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);

// Ejercicio 48 "Shopping List"

let myList = [["Agua", 2], ["Azúcar", 3], ["Leche", 4], ["Pan", 5], ["Gaseosa Coca-Cola", 10]];

// Ejercicio 49 "Write Reusable JavaScript with Functions"

function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction(); 

// Ejercicio 50 "Passing Values to Functions with Arguments"

function functionWithArgs(param1, param2) {
    let myResult = param1 + param2;
    console.log(myResult);
  }
  functionWithArgs(1, 2);

// Ejercicio 51 "Return a Value from a Function with Return"

function timesFive(num) {
    return num * 5;
  }
  
  let response = timesFive(3);

// Ejercicio 52 "Global Scope and Functions"

let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Ejercicio 53 "Local Scope and Functions"

function myLocalScope() {
    var myVar = 3;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);

// Ejercicio 54 "Global vs. Local Scope in Functions"

const outerWear = "T-Shirt";

function myOutfit() {

  var outerWear = "sweater";

  return outerWear;
}

myOutfit();

// Ejercicio 55 "Understanding Undefined Value returned from a Function"

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}

addThree();
addFive();

// Ejercicio 56 "Assignment with a Returned Value"

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Ejercicio 57 "Stand in Line"

function nextInLine(arr, item) {

  arr.push(item);
  item = arr.shift();
  return item;

}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Ejercicio 58 "Understanding Boolean Values"

function welcomeToBooleans() {

  return true; // Change this line

}

// Ejercicio 59 "Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
 
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

}

// Ejercicio 60 "Comparison with the Equality Operator"

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Ejercicio 61 "Comparison with the Strict Equality Operator"

function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Ejercicio 62 "Practice comparing different values"

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Ejercicio 63 "Comparison with the Inequality Operator"

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Ejercicio 64 "Comparison with the Strict Inequality Operator"

function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// Ejercicio 65 "Comparison with the Greater Than Operator"

Function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Ejercicio 66 "Comparison with the Greater Than Or Equal To Operator"

function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Ejercicio 67 "Comparison with the Less Than Operator"

function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }

  if (val < 55) { 
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Ejercicio 68 "Comparison with the Less Than Or Equal To Operator"

function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// Ejercicio 69 "Comparisons with the Logical And Operator"

function testLogicalAnd(val) {
  
  if (val >= 25 && val <= 50) {    
      return "Yes";    
  }

  return "No";
}

testLogicalAnd(10);

// Ejercicio 70 "Comparisons with the Logical Or Operator"

function testLogicalOr(val) {

  if (val <10 || val >20) {
    return "Outside";
  }
 
  return "Inside";
}

testLogicalOr(15);

// Ejercicio 71 "Introducing Else Statements"

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  return result;
}

testElse(4);

// Ejercicio 72 "Introducing Else If Statements"

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else{
    return "Between 5 and 10";
  } 
}

testElseIf(7);

// Ejercicio 73 "Logical Order in If Else Statements"

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// Ejercicio 74 "Chaining If Else Statements"

function testSize(num) {

  if (num < 5) {
    return "Tiny";
  } 
  else if (num < 10){
    return "Small";
  }
  else if (num < 15){
    return "Medium";
  }
  else if (num < 20){
    return "Large";
  }
  else if (num >= 20){
    return "Huge";
  }
  else{
    return "Change Me";
  }
}

testSize(7);

// Ejercicio 75 "Golf Code"

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
 
  if(strokes == 1){
    return "Hole-in-one!";
  }
  else if(strokes <= (par - 2)){
    return "Eagle";
  }
  else if(strokes == (par - 1)){
    return "Birdie";
  }
  else if(strokes == par){
    return "Par";
  }
  else if(strokes == (par +1)){
    return "Bogey";
  }
  else if(strokes == (par + 2)){
    return "Double Bogey";
  }
  else if(strokes >= (par + 3)){
    return "Go Home!";
  }
  else{
     return "Change Me";
  }
}

golfScore(5, 4);

// Ejercicio 76 "Selecting from Many Options with Switch Statement"

