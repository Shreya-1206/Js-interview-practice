//function declaration - means a function is declared with a function keyword and name and hoisted at the top of our code

//function - a block of code used to perform a specific task and can be used multiple times with different inputs

function abc() {
  console.log("Hello shreya");
}

//function experssion - means function is assigned to a variable and its not hoisted and treated as a normal variable

const def = function () {
  console.log("Hello shreya");
};

// annonymous function - a function without a name, can be used can be used as callback function or variable assignment

// setTimeout(function () {
//   console.log("Hello shreya");
// }, 3000);

// IFFE - Immediately invoked function expression, immediately gets invoked after its declaration

(function () {
  console.log("Hello shreya iffe");
})();

(function (x) {
  return (function (y) {
    console.log(x);
  })(8);
})(10);

// function scope  - when a variable is declare in the function and its accessible only inside that function and its inner function not outside of it .

var num1 = 10,
  num2 = 20,
  username = "shreya";

function multiply() {
  console.log(num1 * num2);
}
multiply();

function test() {
  var num1 = 5;
  var num2 = 10;

  function add() {
    return username + " " + (num1 + num2);
  }
  console.log(add());
}
test();

///Example of function scope var/let

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

///Function hoisting - Function are hoisted diffferrnt than let,const and var. Functions can be invoked before they are declared and gives the output without an error.

getName("shreya");

function getName(name) {
  console.log(name);
}

var x = 20;

const fun = function () {
  console.log(x); //Shadows the global variable x

  var x = 10;
};
fun();

var username = "Roadside Coder",
  num1 = 10,
  num2 = 20;

function multiply() {
  return num1 * num2;
}

console.log(multiply());

function details() {
  var num1 = 4;
  var num2 = 5;

  function add() {
    return username + " " + (num1 + num2);
  }
  console.log(add());
}

details();

//Parameter and Argements

//Arguments - are the function values that we pass while invoking a function

//Parameters - so when we pass the values as arguments the function recives thoses values as parameters and we can use those parameters to perfoem some operations

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 10));

//Spread Operator - allows to spread array items

function mul(a, b, c) {
  console.log(arguments);
  return a * b * c;
}

const arr = [1, 2, 3];

console.log(mul(...arr));

// Rest Operator - Receving those spread arrays items as parameters

function sumAll(...args) {
  console.log(args);

  return args.reduce((acc, curr) => acc + curr, 0);
}

const sumArr = [1, 2, 3, 4, 5];
console.log(sumAll(...sumArr));

function restFun(x, y, z, ...args) {
  console.log(arguments);
  console.log(y, z);
}
restFun(1, 2, 3, 4, 5, 6);

//CallBack Function - Function which can we passed to another function as arguments and can we invoked inside the outer function to perform an action

let count = 0;

function counter() {
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
}
counter();

//Arrow function - A shorter syntax for writing function expressions and does not have its own this keyword

const arrowFun = (firstName, LastName) => firstName + " " + LastName;

console.log("Arrow Function firstname and lastname", arrowFun("Shreya", "Ray"));

// Use Return keyword when we have more than one line of code in the function body

//Difference Between arrow function and normal function

//Syntax

function normalFun() {
  console.log("Normal Function");
}

const arrowFun2 = () => {
  var x = 10;
  console.log("Arrow Function", x);
};
arrowFun2();

//this keyword

const user = {
  username2: "JavaScript",
  age: 25,
  rc1: function () {
    console.log("Normal Function", this.username2);
  },
  rc2: () => {
    console.log(this.username2); //undefined because arrow function does not have its own this keyword and it takes the this value from its parent scope which is the global scope in this case and its undefined
  },
};

user.rc1();
user.rc2();

//Arugments
function normalFunArg() {
  console.log(arguments);
}

normalFunArg(1, 2, 3);

const checkArguments = () => {
  console.log(arguments); //ReferenceError: arguments is not defined because arrow function does not have its own arguments object and it takes the arguments value from its parent scope which is the global scope in this case and its not defined
};
checkArguments(1, 2, 3);
