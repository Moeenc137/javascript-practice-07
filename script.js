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

let arrowsum2 = (v, b) => console.log("arrowsum2:", v / b);

arrowsum2(45, 78);

//practice(fnctions): extract all the vovals from the prompt:

let input = prompt();

if ((input = "a,e,i,o,u")) {
  console.log();
} else {
}
