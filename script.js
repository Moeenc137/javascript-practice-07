//functions

//how to make our own function:
function sum(a, b, c) {
  console.log(b, c, a);
}
sum("com", "in", "asas");

//return function:
function add(a, b, c, d) {
  x = a + b + c / d;
  return x;
}

let alg = add(20, 8, 9, 45);
console.log(alg);

function add2(a, b, c, d) {
  console.log("sum of add2", a / b - c + d);
}

add2(2, 3, 4, 2);
add2(12, 332, 432, 221);

function add3(a, b, c, d) {
  return a + b + c / d;
}
let ad = add3;
console.log(ad);

//arrow function:
let arrowsum = (a, b) => {
  console.log("value of arrowsum : ", b + a);
};
arrowsum(2, 2);

let arrowsum2 = (v, b) => console.log("arrowsum2:", v + b);
arrowsum2("ijkl", "mnop");

//practice(fnctions): extract all the vovals from the prompt:

// let input = prompt();

// if ((input = "a,e,i,o,u")) {
//   console.log();
// } else {
// }

function countvowels(str) {
  let = count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

let countvow = (str) => {
  let = count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

//foreach(loop) function only can used in arrays
//callback:
let arrowsum3 = (v, b) => console.log("arrowsum3:", v + b);
arrowsum3("efgh", "abcd");

function callarrow(arrowsum3) {
  console.log(arrowsum3);
}

callarrow("callarrow :", arrowsum3);

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (val) {
  console.log(val);
});

let alf = ["and", "or", "not"];
alf.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

// practice to return square of every number in an array using foreach loop.
let number = [2, 3, 7, 8, 9];
number.forEach((val) => {
  console.log(val * val);
});
// let number3 = [2, 3, 7, 8, 9];
// let pnum3 = number3.forEach((val) => {});

//map method (lets you return a function)
let calsquare = [12, 14, 89, 87];
let pcalsquare = calsquare.map((num) => {
  return num * num;
});

console.log(pcalsquare);

//filter method
let filtrnum = [21, 32, 4, 5, 53];
let Pfiltrnum = filtrnum.filter((val) => {
  return val % 2 === 0;
});
console.log(Pfiltrnum);

//reduce  method
let arrrd = [2, 4, 5, 87, 99];
arrrd.reduce((prev, crr) => {});
