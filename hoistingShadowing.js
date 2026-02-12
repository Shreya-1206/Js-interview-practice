//Scope - Is a region of a program where variables exist and can be recognized.
//types of scope - Global, Local, Functional, Block

//Var is functional scope and let and const are block scope

{
  var a = 10;
  console.log(a);
}
console.log(a);

{
  let b = 20;
  console.log(b);
}
// console.log(b); //ReferenceError: b is not defined

//Shadowing- When a variable is declared in the inner scope with the same name as the outer scope variable name.

function test() {
  let a = 10; //local variable a in the function scope

  if (true) {
    let a = 20; //block scope
    console.log(a); //20 - the inner variable a is shadowing the outer variable a
  }
  console.log(a); //10 - the outer variable a is not affected by the inner variable a
}

test();

// If we shadow let variable with var variable its illegal shawdowing and it will throw syntax error

// But if shadow var vaariable with let variable its legal shadowing and it will not throw any error

function test2() {
  var a = 34;
  if (true) {
    let a = 45;
    console.log(a);
  }
  console.log(a);
}

test2();

// function test3() {
//   let a = 34;
//   if (true) {
//     var a = 45; //SyntaxError: Identifier 'a' has already been declared
//     console.log(a);
//   }
//   console.log(a);
// }

// test3();

//Declaration - Introducing variable to the js engine

var x;
var x;

let y;
// let y; //SyntaxError: Identifier 'y' has already been declared

// const z;//SyntaxError :Missing intializer in const declaration;

//Intialization - ReIntialization

var x;
x = 10;

let u;
u = 20;

// const i; // Missing initializer in const declaration
// i = 30;

//Hoisting - During creation phase/memeory phase js engine moves all variables and function to the top of the code

console.log(m);
var m = 10; //undefined

// console.log(n);
// let n = 20; //Is in TDZ cannot access before initialization same goes for const

function abc() {
  console.log(p);
  var p = 90;
}
abc(); //here function has been intialized but variable p is declared but not been intialized so it will return undefined.

function def() {
  console.log(a, b, c);
  var a = 10; //undefined
  let b = 20; //reference error because of TDZ
  const c = 30; //reference error because of TDZ
}

def();
 
// TDZ - Time between the declaration and initailization of a particular variable 