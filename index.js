function sayHello (name) {
    console.log(`Hello ${name}`);
}

function sayBye(name) {
    console.log(`Goodbye ${name}`);
}

sayHello('Sacha')
sayBye('Sacha')


// const || let
const greeting = "Hello sacha";
let greeting2 = "Hello sacha";

greeting2 = "Bye Sacha";
// greeting = "Bye Sacha";

const greeting3 = null;

console.log(greeting, greeting2);
console.log(greeting);

const arrayNames = [];

arrayNames.push("Sacha");
arrayNames.push("Romain");


const objNames = {
  first: "Sacha"
};

objNames.second = "Romain";

// objNames.first --> "Sacha";
// arrayNames[0] -> "Sacha";

console.log(arrayNames, objNames);

// primtives -> number, string, boolean, null, undefined
// Array, Objecti
//
//

// Type     // name for reference           // value
const            number1                  =      1;
const             obj1                    =   {age: 32}; // obj1.age === obj["age"] --> It's the same




// For function  --> 
//
// Type of        name                      parameters
//                                          // what you need      --> {  what you do }
  function      sayGoodAfternoonFirstOne    ()                {
                                           return "Good afternoon";
                }
const           sayGoodAfternoon          =    function() { return 'Good afternoon' };
const           sayGoodAfternoonNew       =   () => 'Good afternoon';
const           sayGoodNoonNewExplicit    =   () => { return 'Good afternoon' };

                            // parameter
function sayGoodMorningName (name) {
  //let name = parameter
  return 'Good morning ' + name;
}
                              // parameter
console.log(sayGoodMorningName("Sacha"))
console.log(sayGoodMorningName("Roma"))



console.log("--->", sayGoodAfternoon(), sayGoodMorningName("Roma"), number1, 1 === number1, obj1, [obj1, "toto", sayGoodAfternoon]);


/**
 * Modify something
 * Execute external actions
 * 
 */

/*
 * Return something new / different
 */


function add(a, b) {
                          // OR
  if (typeof a != "number" ||    typeof b != "number" ) {
    return "Not a Number";
  }

  return a + b;
}

function addWoReturn(a, b) {
  a + b;
}

const gameScore = add(12, "Hello");
const gameCurrent = addWoReturn(13, 59);

// add 10

function addTen (yourNumber)  {
  return add(yourNumber, 10);
}

const weather = "cloudy";

function printWeather(weather) {
  console.log("It's " + weather)
}

console.log("Weahter-  --> ", weather);

printWeather("sunny");

// console.log(gameScore, gameCurrent, addTen(80)); // 57 undefined
// console.log(add(1,2), add(10, 20), addWoReturn(20, 30));

