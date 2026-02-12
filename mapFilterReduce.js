//Map, Filter, Reduce are array methods used to iterate over an array and perform some transformation aor computation

//map- used to return a new array from the existing array and applies a callback function to each element of the array and map takes 3 parameter (currentvalue, index, array)

const nums = [1, 2, 3, 4, 5];

const result = nums.map((num, index, arr) => {
  return num * 2 + index;
});
console.log(result);

//filter - this method is used to return a new array when a element of array satisfy the conditional statement ,then only that element will be added to the new array

const greaterThan3 = nums.filter((num, i, arr) => {
  return num > 3;
});
console.log(greaterThan3);

//reduce - This methods reduces all the array elements down to one value and takes parameter different from map and filter it takes (accumulator, currentValue, i , arr)

// reduce takes a callback function and intial value

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
});

console.log(sum);

// here acc => means computaion of previous iteration
//curr means => current value of the array

// Now Polyfills of mqp , filter and reduce

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiply3 = nums.myMap((num, i, arr) => {
  return num * 3;
});
console.log(multiply3);

// Here this => nums array
// this[i] => current value of the array
// i =>index of the array

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const greaterThan2 = nums.myFilter((num, i, arr) => {
  return num > 2;
});

console.log(greaterThan2);

Array.prototype.myReduce = function (cb, intialValue) {
  let accumulator = intialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sum2 = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});

console.log(sum2);

/// Difference between mapp and forEach

const nums2 = [1, 2, 3, 4, 5, 6];

const mapRes = nums2.map((num, i, arr) => {
  return num * 2 + i;
});

const forEachRes = nums2.forEach((num, i, arr) => {
  return num * 2 + i;
});
console.log(mapRes, forEachRes, nums2);

//But we know forEach alter the original array and doesnt return a new array

const forEachRes2 = nums2.forEach((num, i, arr) => {
  nums2[i] = num * 2 + i;
});
console.log(nums2, forEachRes2);

const users = [
  {
    name: "Amit",
    age: 21,
    marks: 40,
    rollNumber: 101,
  },
  {
    name: "Priya",
    age: 22,
    marks: 50,
    rollNumber: 102,
  },
  {
    name: "Rahul",
    age: 20,
    marks: 55,
    rollNumber: 103,
  },
  {
    name: "Sneha",
    age: 23,
    marks: 88,
    rollNumber: 104,
  },
  {
    name: "Karan",
    age: 21,
    marks: 92,
    rollNumber: 105,
  },
];

const convertNames = users.map((user) => {
  return user.name.toUpperCase();
});
console.log(convertNames);

const userMoreThan50 = users.filter((user) => {
  return user.marks > 50;
});

console.log(userMoreThan50);

const moreThan60Marks = users.filter((user) => {
  return user.marks > 60 && user.rollNumber > 102;
});
console.log(moreThan60Marks);

const resultMarks = users.reduce((acc, curr) => {
  if (curr.marks !== undefined) {
    return acc + curr.marks;
  }
}, 0);

console.log(resultMarks);

const resultMarks2 = users
  .filter((user) => {
    if (user.marks <= 50) {
      user.marks = user.marks + 15;
    }
    return user;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(resultMarks2);

// Take number >10 * 2
const numbers = [5, 12, 8, 20, 3, 15];

const res = numbers
  .filter((num) => {
    return num > 10;
  })
  .map((num) => {
    return num * 2;
  });
console.log(res);

const cart = [
  { item: "Laptop", price: 50000, qty: 1 },
  { item: "Mouse", price: 500, qty: 2 },
  { item: "Keyboard", price: 1500, qty: 1 },
];

const totalPrice = cart.reduce((acc, curr) => {
  return acc + curr.price * curr.qty;
}, 0);
console.log(totalPrice);
