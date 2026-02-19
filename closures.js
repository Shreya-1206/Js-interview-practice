// Lexical scope - When a variable is defined in a function can be accessed in that function or inner function but not outside of the function.

var x = "Roadside Coder";

function getName() {
  var y = 9;
  console.log(x);
  console.log(y);
}
getName();
console.log(x);
// console.log(y); //ReferenceError: y is not defined

function closure() {
  var name = "Shreya";
  function displayName() {
    console.log(name);
  }
  displayName(); // Output: Shreya immediately invoked function
  console.log(displayName); // Output: [Function: displayName]
}

closure();

// Closure - A closure is a combination of a function bundles together with its refference to its surrounding state(the lexical env in which it was defined). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function closure2() {
  var name = "Closure Example";

  function innerFunction() {
    console.log(name);
  }

  return innerFunction; // Return the inner function to create a closure
}

let myClosure = closure2();
console.log(myClosure);
myClosure();

closure2()();

/// Example 1
var user = "Shreya";

function greet() {
  var os = "Mozilla";

  function innerFunction(n) {
    console.log(`Hello ${user}, welcome to ${os} your number is ${n}`);
  }

  os = "Google Chrome"; // Modifying the outer variable

  return innerFunction;
}

greet()(54566778);

/// Example 2

var e = 10;

function sum() {
  return function (a) {
    return function (b) {
      return function (c) {
        return a + b + c + e;
      };
    };
  };
}

console.log(sum()(1)(2)(3));

/// Example 3

let count = 0;

function computation() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
}
computation();

/// Example 4

function createBase(base) {
  return function innerFun(num) {
    return base + num;
  };
}

let addSix = createBase(6);
console.log(addSix(10)); // Output: 16
console.log(addSix(21)); // Output: 27

/// Example 5 optimize time

function findIndex() {
  let a = [];

  for (let i = 0; i < 100000000; i++) {
    a[i] = i * i;
    //a[0] = 0*0
    //a[1] = 1*1
    //a[2] = 2*2
  }
  //   console.log(a[index]);

  return function (index) {
    console.log(a[index]);
  };
}

let getIndex = findIndex(); // Loop runs only once and creates the array, then returns the inner function that has access to the array through closure.

console.time("10th index");
getIndex(10);
console.timeEnd("10th index");

console.time("112 index");
getIndex(112);
console.timeEnd("112 index");

// Example 6 - closure with setTimeout

function varClosure() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

function letClosure() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

// varClosure();
// letClosure();

function closureWithVar() {
  for (var i = 0; i < 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

closureWithVar();

///Example - 7
// Create a private _counter

function counter() {
  let _counter = 0;

  function add(num) {
    _counter = _counter + num;
  }

  function retriveComputation() {
    console.log("Counting comes to -", _counter);
  }

  return {
    add,
    retriveComputation,
  };
}

let compResult = counter();
compResult.add(10);
compResult.add(5);
compResult.retriveComputation();

let compResult2 = counter();
compResult2.add(100);
compResult2.add(50);
compResult2.retriveComputation();

//Module Pattern - Means in a function when we have private and public method and public has been shared publicaly can be used to invoke private method and perform some action and provide it to the user , in this case private remains strictly not accessible to public.

var moduleFun = (function abc() {
  function privateMethod() {
    let privateValue = 1000;
    console.log("This is private value - ", privateValue);
  }

  function publicMethod() {
    privateMethod();
  }

  return {
    public: publicMethod, // dont invoke here just  return like publicMethod
  };
})();

moduleFun.public();

// Example - 8 invokation should be only once , even thought function invoked multiple times

let youtuber;

function subscribeChannel() {
  youtuber = "RoadSide Coder";
  console.log("Subcribed to this youtuber without using closure- ", youtuber);
}

subscribeChannel();
subscribeChannel();
subscribeChannel();
subscribeChannel();

// Transform so opnly once it is invoked
function subscribeOnce() {
  let count = 0;

  return function () {
    if (count > 0) {
      console.log("You have already subscribed to this youtuber - ", youtuber);
    } else {
      youtuber = "RoadSide Coder";
      console.log("Subcribed to this youtuber - ", youtuber);
      count++;
    }
  };
}
let subscribe = subscribeOnce();
subscribe();
subscribe();
subscribe();
subscribe();

// This closure helps us to maintain private values, have a refference to its variable lexically, provides us to keep record of the state and helps us to implment once, memoziation, etc

// Example Once polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

let hello = (a, b) => {
  console.log(`Shreya, values`, a + b);
};

let helloOnce = once(hello(2, 3));
helloOnce();
helloOnce();
helloOnce();

// Example - memoization
// In Once we control the execution of the function by invalidating the function to invoke once
// But here in memo we control the execution of function by caching the result based on inputs

function myMemo(func, context) {
  const res = {};

  return function (...args) {
    const argsCache = JSON.stringify(...args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

function heavyComp(num1, num2) {
  for (let i = 0; i < 100000000; i++) {}

  return num1 * num2;
}

// let useMyMemo = myMemo(heavyComp(2, 3));

let useMyMemo = myMemo(heavyComp);

console.time("comp started");
console.log(useMyMemo(5, 5));
console.timeEnd("comp started");

console.time("comp started 2");
console.log(useMyMemo(5, 5));
console.timeEnd("comp started 2");
