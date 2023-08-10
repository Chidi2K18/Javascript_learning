//we are doing this the code acadey way
//////////////////////////////////////////
/*
What can be learned from the below snippet:
    we have initialised a variable (a) and given it a value
    we have assigned a new value to the variable (a)
    we have initialised a variable (b) without giving it a value
    we have assigned the value of b to be the same as the value of a
*/
var a = 0;
a = 7;
var b;
b = a;
//console.log(b);
/////////////////////////////////////////
//what can be learned from the below snippet
/**
 * we will be looking at the difference between var and let keywords
 * var can have multiple instances of the same variable name (subsequent calls and changes will override the original which can create issues)
 * let can only have a single instance of a variable name to prevent overwriting
 * interesting factoid: the let keyword was introduced in ES6
 */
var over = "yes";
//console.log(over);
var over = "no";
//console.log(over);

let test = "this cannot be duplicated";
//console.log(test);
// escaping strings to do interestingv stuff
const myStr = "yes\n\ttry\nthis";
//console.log(myStr);

//NOTE: strings in javascript are immutable meaning you can't change say the 2nd character in a string

let testArray = [1, 2, 3];
let multiarray = [
  ["test", "Letters", "numbers"],
  [4, 5, 6],
];
let shoppingList = [
  ["Towels", 15],
  ["Mouthwash", 20],
  ["Soap", 30],
  ["Water", 16],
  "Carpet, 20",
];
testArray[0] = "Test";
multiarray.push("Tastes peachy");
multiarray[0].splice(2, 1, "bonk");
//remember to specify which index you are looking into
multiarray[1].sort(function (a, b) {
  return b - a;
});
/**
 * the sort is using a compare function
 * When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
 * If the result is negative, a is sorted before b.
 * If the result is positive, b is sorted before a.
 * If the result is 0, no changes are done with the sort order of the two values.
 */
//console.log(multiarray);
function myFunc() {
  //console.log("functiom");
}
function addition(a, b) {
  return a + b; //this does not print a result
}
let answer = addition(a, 5);
//console.log(answer);
// this is an example of a queue datastructure
function queueAlgo(arr, num) {
  arr.push(num);
  arr.shift();
  return arr;
}

let tester = [1, 2, 3, 4, 5];

let output = queueAlgo(tester, 10);

//console.log(output)
// remember vscode does not save before running so nothing will change between runs if nothing is saved
function golf(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes === par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
}

//console.log(golf(4, 7));

function switchtest(input) {
  switch (input) {
    case "black":
      return "The colour is black";
      break;
    case "blue":
      return "The colour is blue";
    default: //this is if ylou input something other than black or blue
      return "yes";
      break;
  }
}

//console.log(switchtest("blue"));

let person = {
  name: "Nat",
  Age: 22,
  Weight: 132.9,
  "current games rotation": ["Destiny 2", "Apex Legends", "Rocket League"],
};
let name = person.name;
person["current games rotation"].push("Minecraft");
let games = person["current games rotation"];
//console.log([name, games]);
person.roomColour = "blue"; //this is how you can add a new property to the object
//console.log(person);

function checkForProperty(object, property) {
  //note this doesnt
  return object.hasOwnProperty(property);
}
//console.log(checkForProperty(person, "roomColour"));
delete person.roomColour;
//this is an example of a complex object
// the object is nested within an array
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Kanye West",
    title: "My beautiful dark twisted fantasy",
    release_year: 2010,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];
let text = "Answer = ";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i;
  //console.log(text);
}

function findTripletsCount(a, d) {
  let count = 0;

  // Loop through the array three times to get all possible triplets
  for (let i = 0; i < a.length - 2; i++) { //{1,2,3}
      for (let j = i + 1; j < a.length - 1; j++) { //{2,3,4}
          for (let k = j + 1; k < a.length; k++) { //{3,4,5}
              let sum = a[i] + a[j] + a[k]; //its the above comments in order
              // Check if the sum of the triplet is a multiple of d
              if (sum % d == 0) {
                  count++;
              }
          }
      }
  }

  return count;
}

arr = [1,2,3,4,5,6,7,8,9,10]
console.log(findTripletsCount(arr, 5))