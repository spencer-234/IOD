import fetch from "node-fetch";
/*
1. makeCounter below is a decorator function which creates and returns a function that
    increments a counter.

    a) Create a second counter counter2 using the makeCounter function and test to see if
    it remains independent to counter1

    b) Modify makeCounter so that it takes an argument startFrom specifying where the
    counter starts from (instead of always starting from 0)

    c) Modify makeCounter to take another argument incrementBy, which specifies how
    much each call to counter() should increase the counter value by.
*/

function makeCounter(startFrom, incrementBy) {
  return function () {
    startFrom += incrementBy;
    console.log(startFrom);
    return startFrom;
  };
}

let counter1 = makeCounter(0, 1);
let counter2 = makeCounter(1, 2);
counter1(); // 1
counter1(); // 2
counter2();
counter2();

/*
2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
    a) What order will the four tests below print in? Why?

    b) Rewrite delayMsg as an arrow function

    c) Add a fifth test which uses a large delay time (greater than 10 seconds)

    d) Use clearTimeout to prevent the fifth test from printing at all.


function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
*/
const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
clearTimeout(setTimeout(delayMsg, 10000, "#5: Delayed by 10s"));

/*
I. The order will be 4, 3, 2, 1 because of setTimeout delaying the function and adding them to the call stack after the delay.
*/
/*
3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
    a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
    suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
    pause, the most recent call to func should be executed and any others ignored.

    b) Extend the debounce decorator function to take a second argument ms, which defines the
    length of the period of inactivity instead of hardcoding to 1000ms

    c) Extend debounce to allow the original debounced function printMe to take an argument
    msg which is included in the console.log statement.

*/
function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

const debounce = (func, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

// printMe = debounce(printMe, 2000);
/* 
create this debounce function for
a) fire off 3 calls to printMe within 300ms - only the LAST one should print, after
1000ms of no calls
*/
setTimeout(printMe, 100, "Hi");
setTimeout(printMe, 200, "Hello");
setTimeout(printMe, 300, "Greetings");

/*
4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
    sequence is the sum of the previous 2.
    e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

    a) Write a function printFibonacci() using setInterval that outputs a number in
    the Fibonacci sequence every second.

    b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
    calls to do the same thing

    c) Extend one of the above functions to accept a limit argument, which tells it how many
    numbers to print before stopping.
*/

const printFibonacci = (limit) => {
  let num1 = 1;
  let num2 = 1;
  let counter = 0;
  let interval = setInterval(() => {
    counter++;
    if (counter === limit) clearInterval(interval);
    console.log(num1);
    let newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
  }, 1000);
};

const printFibonacciTimeouts = () => {
  let num1 = 1;
  let num2 = 1;
  const fibonacci = () => {
    console.log(num1);
    let newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
    setTimeout(fibonacci, 1000);
  };
  setTimeout(fibonacci, 1000);
};

printFibonacci(5);
printFibonacciTimeouts();

/*
5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?

    a) Fix the setTimeout call by wrapping the call to car.description() inside a
    function

    b) Change the year for the car by creating a clone of the original and overriding it

    c) Does the delayed description() call use the original values or the new values from b)? Why?

    d) Use bind to fix the description method so that it can be called from within
    setTimeout without a wrapper function

    e) Change another property of the car by creating a clone and overriding it, and test that
    setTimeout still uses the bound value from d)
*/

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails
//  I. It's because setTimout is passed the object and the keyword this no longer refers to the object.

const wrapper = () => {
    car.description();
}

const bindDesc = {};

setTimeout(wrapper, 200);

let newCar = car;
newCar.year = 1988;
console.log(newCar);
console.log(car);

const desc = car.description.bind(newCar);
setTimeout(desc, 400);

let newCar2 = car;
newCar2.make = 'Honda';

// II. It uses the new value from b) because the newCar object takes the original values from the car.

/*
6. Use the Function prototype to add a new delay(ms) function to all functions, which can
    be used to delay the call to that function by ms milliseconds.
    a) Use the example multiply function below to test it with, as above, and assume that all
    delayed functions will take two parameters

    b) Use apply to improve your solution so that delayed functions can take any number of
    parameters

    c) Modify multiply to take 4 parameters and multiply all of them, and test that your
    delay prototype function still works.
*/
Function.prototype.delay = function(ms) {
  let func = this;

  return function(arg1, arg2) {
    setTimeout(func, ms, arg1, arg2);
  }
};

Function.prototype.delayTwo = function(ms) {
  let func = this;
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
    }
}

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delayTwo(500)(5, 4, 6, 7); // prints 25 after 500 milliseconds

/*
7. In JavaScript, the toString method is used to convert an object to a string representation.  By default, when an object is converted to a String, it returns a string that looks something  like [object Object].  
However, we can define our own toString methods for custom objects to provide a more  meaningful string representation. 
  a) Define a custom toString method for the Person object that will format and print  their details

  b) Test your method by creating 2 different people using the below constructor function  and printing them

  c) Create a new constructor function Student that uses call to inherit from Person and  add an extra property cohort

  d) Add a custom toString for Student objects that formats and prints their details. Test  with 2 students. 

*/
function Person(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
}

Person.prototype.toString = function() {
  return `${this.name} is a ${this.age} year old ${this.gender}`
}

const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Leroy Jenkins', 26, 'male')
const person3 = new Person('Claire Johnson', 56, 'female')
console.log('person1: ' + person1) //prints person1: [object Object]
console.log('person2: ' + person2)
console.log('person3: ' + person3)

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype.toString = function() {
  return `${this.name} is a ${this.age} year old ${this.gender} student in the ${this.cohort} cohort`
}

const student1 = new Student('Leroy Jenkins', 26, 'male', 'second')
const student2 = new Student('Claire Johnson', 56, 'female', 'first')
console.log('student1: ' + student1)
console.log('student2: ' + student2)

/*
8. The following DigitalClock class uses an interval to print the time every second once  started, until stopped. 

  a) Create a new class PrecisionClock that inherits from DigitalClock and adds the  parameter precision – the number of ms between 'ticks'. This precision parameter  should default to 1 second if not supplied.

  b) Create a new class AlarmClock that inherits from DigitalClock and adds the  parameter wakeupTime in the format hh:mm. When the clock reaches this time, it  should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should  default to 07:00 if not supplied.
*/
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix);
    this.precision = precision ? precision : 1000;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
const myPrecisionClock = new PrecisionClock("my precision clock:", 2000);
myPrecisionClock.start();

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime) {
    super(prefix);
    this.wakeupTime = wakeupTime ? wakeupTime : "07:00";
  }
  checkDisplay() {
    const now = new Date();
    const wakeupHours = this.wakeupTime.substring(0, 2);
    const wakeupMins = this.wakeupTime.substring(3);
    if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) {
      console.log("Wake Up!");
      this.stop();
    } else {
      this.display();
    }
  }
  start() {
    this.checkDisplay();
    this.timer = setInterval(() => this.checkDisplay(), 1000);
  }
}
const myAlarmClock = new AlarmClock("my alarm clock:", "17:00");
myAlarmClock.start();

/*
9. We can delay execution of a function using setTimeout, where we need to provide both  the callback function and the delay after which it should execute.
  a) Create a promise-based alternative randomDelay() that delays execution for a  random amount of time (between 1 and 20 seconds) and returns a promise we can use  via .then(), as in the starter code below

  b) If the random delay is even, consider this a successful delay and resolve the promise,  and if the random number is odd, consider this a failure and reject it

  c) Update the testing code to catch rejected promises and print a different message

  d) Try to update the then and catch messages to include the random delay value 
*/

function randomDelay() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}

randomDelay().then((delay) =>
  console.log("There appears to have been a delay.")
);

function randomDelayB() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    setTimeout(delay % 2 === 0 ? resolve : reject, delay * 1000)
  );
}

randomDelayB()
  .then(() => console.log("Successful delay"))
  .catch(() => console.log("Failed delay"));

function randomDelayD() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    setTimeout(delay % 2 === 0 ? resolve : reject, delay * 1000, delay)
  );
}

randomDelayD()
  .then((delay) => console.log("Successful delay of " + delay + " seconds"))
  .catch((delay) => console.log("Failed delay of " + delay + " seconds"));

/*
10.Fetch is a browser-based function to send a request and receive a response from a server,  which uses promises to handle the asynchronous response.  
The below fetchURLData uses fetch to check the response for a successful status  code, and returns a promise containing the JSON sent by the remote server if successful  or an error if it failed. (To run this code in a node.js environment, follow the instructions in  the comments before the function.) 
  a) Write a new version of this function using async/await 

  b) Test both functions with valid and invalid URLs 

  c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,  using Promise.all to combine the results. 
*/

globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1") //works, prints result .then(data => console.log(data))
  .catch((error) => console.error(error.message));
fetchURLData("https://jsonplaceholder.typicode.com/fake") //doesn't exist, prints catch .then(data => console.log(data))
  .catch((error) => console.error(error.message));
async function asyncFetchURLData(url) {
  //a)
  let fetchResponse = await fetch(url);
  if (fetchResponse.status === 200) {
    let responseJson = await fetchResponse.json();
    return responseJson;
  } else {
    throw new Error(`Request failed with status ${fetchResponse.status}`);
  }
}
async function asyncFetchMultipleURLData(urls) {
  //c)
  return Promise.all(
    urls.map(async (url) => {
      let response = await fetch(url);
      return response.json();
    })
  );
}
try {
  let responseData1 = await asyncFetchURLData(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(responseData1); //works
  let responseData2 = await asyncFetchMultipleURLData([
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
  ]);
  console.log(responseData2); //works
  let responseData3 = await asyncFetchURLData(
    "https://jsonplaceholder.typicode.com/fake"
  );
  console.log(responseData3); //fails
} catch (error) {
  console.log(error.message);
}
