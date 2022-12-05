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

function caseInSwitch(val) {
  let answer = "";

switch (val){
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3: 
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;  
}

  return answer;
}

caseInSwitch(1);

// Ejercicio 77 "Adding a Default Option in Switch Statements"

function switchOfStuff(val) {
  let answer = "";

switch (val){
  case "a":
    answer = "apple"
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}
  return answer;
}

switchOfStuff(1);

// Ejercicio 78 "Multiple Identical Options in Switch Statements"

function sequentialSizes(val) {
  let answer = "";

switch(val){
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
  return answer;
}

sequentialSizes(1);

// Ejercicio 79 "Replacing If Else Chains with Switch"

function chainToSwitch(val) {
  let answer = "";

  switch(val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}

chainToSwitch(7);

// Ejercicio 80 "Returning Boolean Values from Functions"

function isLess(a, b) {
  return a < b;
}
isLess(10, 15);

// Ejercicio 81 "Return Early Pattern for Functions"

function abTest(a, b) {

 if (a < 0 || b < 0){
   return undefined;
 }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Ejercicio 82 "Counting Cards"

let count = 0;

function cc(card) {

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Ejercicio 83 "Build JavaScript Objects"

const myDog = {

  name: "Coco",
  legs: 2,
  tails: 1,
  friends:["Jack", "Simon"]

};

// Ejercicio 84 "Accessing Object Properties with Dot Notation"

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;    

// Ejercicio 85 "Accessing Object Properties with Bracket Notation"

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];   
const drinkValue = testObj["the drink"];    

// Ejercicio 86 "Accessing Object Properties with Variables"

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];  

// Ejercicio 87 "Updating Object Properties"

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

// Ejercicio 88 "Add New Properties to a JavaScript Object"

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "Guau";

// Ejercicio 89 "Delete Properties from a JavaScript Object"

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

// Ejercicio 90 "Using Objects for Lookups"

function phoneticLookup(val) {
  let result = "";

var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank",
}

result = lookup[val];

  return result;
}

phoneticLookup("charlie");

// Ejercicio 91 "Testing Objects for Properties"

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Ejercicio 92 "Manipulating Complex Objects"

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Carlos Pereira Larrea",
    "title": "Intiempo",
    "release_year": 2022,
    "formats":[
      "CD",
      "Digital",
      "Platforms"
    ]
  }
];

// Ejercicio 93 "Accessing Nested Objects"

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Ejercicio 94 "Accessing Nested Arrays"

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Ejercicio 95 "Record Collection"

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  
  if (value === ""){
    delete records[id][prop];
  }
  else if(prop === "tracks"){
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  }
  else{
    records[id][prop] = value;
  }  
  
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Ejercicio 95 "Iterate with JavaScript While Loops"

const myArray = [];

let i = 5;

while (i >= 0){
  myArray.push(i);
  i--;
}

// Ejercicio 96 "Iterate with JavaScript For Loops"

const myArray = [];

for (let i=1; i <= 5; i++){
  myArray.push(i);
}

// Ejercicio 97 "Iterate Odd Numbers With a For Loop"

const myArray = [];

for (let i = 1; i < 10; i+=2 ){
  myArray.push(i);
}

// Ejercicio 98 "Count Backwards With a For Loop"

const myArray = [];

for(let i = 9; i > 0; i-= 2){
  myArray.push(i);
}

// Ejercicio 99 "Iterate Through an Array with a For Loop"

const myArr = [2, 3, 4, 5, 6];

let total = 0;

for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

// Ejercicio 100 "Nesting For Loops"

function multiplyAll(arr) {
  let product = 1;

for(let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr[i].length; j++){
    product *= arr[i][j];
  }
}

  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Ejercicio 101 "Iterate with JavaScript Do...While Loops"

const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++
} 
while (i < 11) {}

// Ejercicio 102 "Replace Loops using Recursion"

function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// Ejercicio 103 "Profile Lookup"

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Ejercicio 104 "Generate Random Fractions with JavaScript"

function randomFraction() {

  return Math.random();

}

// Ejercicio 105 "Generate Random Whole Numbers with JavaScript"

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Ejercicio 106 "Generate Random Whole Numbers within a Range"

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Ejercicio 107 "Use the parseInt Function"

function convertToInteger(str) {
  str = parseInt(str);
  return str;
}

convertToInteger("56");

// Ejercicio 108 "Use the parseInt Function with a Radix"

function convertToInteger(str) {
  str = parseInt(str, 2);
  return str;
}

convertToInteger("10011");

// Ejercicio 109 "Use the Conditional (Ternary) Operator"
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// Ejercicio 110 "Use Multiple Conditional (Ternary) Operators"

function checkSign(num) {
  return num > 0 ? "positive"
  : num < 0 ? "negative"
  : "zero";
}

checkSign(10);

// Ejercicio 111 "Use Recursion to Create a Countdown"

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// Ejercicio 112 "Use Recursion to Create a Range of Numbers"

function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// Finished Basic JavaScript