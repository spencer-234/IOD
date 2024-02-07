/*
1. answers for first expressions

    10
    -1
    1
    false
    2
    6
    9px
    $45
    2
    NaN
    -9 5
    -14
    1
    NaN
    true
    false
    -2

2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

    I. Addition is not correct because the numbers are strings so they are concatenated. To fix this change the strings to integers.
    II. lessThan2 is not correct due to the operator comparing the ascii values of the strings. To fix this change the strings to integers.

3. Which of the following console.log messages will print? Why?

    I. '#2 zero is true' will print because if the string isn't empty it's considered a truthy value.
    II. 'negative is true' will print because an integer other than zero is a truthy value.
    III. 'positive is true' will print because an integer other than zero is a truthy value.

4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
    let a = 11, b = 3;
    let result = `${a} + ${b} is `;
    (a + b < 10) ? result += 'less than 10' : result += 'greater than 10';
    console.log(result);

    I. '+=' will add whatever value is on the right to the variable on the left and the new variable will equal the result.

5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
    const getGreeting = function(name) {
        return `Hello ${name}!`;
    }

    const getGreeting2 = (name) => `Hello ${name}!`;

    console.log(getGreeting('Bill'));
    console.log(getGreeting2('Bob'));

6.  a) Complete the inigo object by adding a lastName property and including it in the
    greeting.

    b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
    prints his famous catch phrase to the console. HINT: see
    https://www.imdb.com/title/tt0093779/characters/nm0001597.

    c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

    const westley = {
      name: "Westley",
      numFingers: 5,
    };
    const rugen = {
      name: "Count Rugen",
      numFingers: 6,
    };
    const inigo = {
      firstName: "Inigo",
      lastName: "Montoya",
      greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
      },
      getCatchPhrase: (person) => {
        if (person.numFingers === 6) return "Nice to meet you.";
        return "You killed my father. Prepare to die.";
      },
    };
    inigo.greeting(westley);
    inigo.greeting(rugen);

7. The following object represents a basketball game and keeps track of the score as the
    game progresses.

    a) Modify each of the methods so that they can be ‘chained’ together and the last line of
    the example code works

    b) Add a new method to print the full time final score

    c) Add a new object property to keep track of the number of fouls and a method to
    increment it, similar but separate to the score. Include the foul count in the half time and
    full time console messages

    d) Test your object by chaining all the method calls together in different combinations.

    const basketballGame = {
      score: 0,
      fouls: 0,
      freeThrow() {
        this.score++;
        return this;
      },
      basket() {
        this.score += 2;
        return this;
      },
      threePointer() {
        this.score += 3;
        return this;
      },
      foul() {
        this.fouls++;
        return this;
      },
      halfTime() {
        console.log(`Half time score is ${this.score}. There have been ${this.fouls} fouls so far.`);
        return this;
      },
      finalScore() {
        console.log(`Final score is ${this.score}. There have been ${this.fouls} fouls in total.`);
        return this;
      }
    };
    //modify each of the above object methods to enable function chaining as below:
    basketballGame
      .basket()
      .freeThrow()
      .foul()
      .freeThrow()
      .basket()
      .foul()
      .freeThrow()
      .threePointer()
      .halfTime()
      .threePointer()
      .basket()
      .foul()
      .freeThrow()
      .freeThrow()
      .finalScore();

8. The object below represents a single city.

    a) Write a function that takes an object as an argument and uses a for...in loop to access
    and print to the console each of those object properties and their values. Test it using
    the sydney object below.

    b) Create a new object for a different city with different properties and call your function
    again with the new object.

    const sydney = {
      name: "Sydney",
      population: 5_121_000,
      state: "NSW",
      founded: "26 January 1788",
      timezone: "Australia/Sydney",
    };

    const newYork = {
      name: "New York City",
      population: 8_468_000,
      state: "NY",
      year_founded: 1624,
      best_restaurant: "Gage & Tollner", 
    }

    const printObject = (city) => {
      for (const key in city) {
        console.log(`${key}: ${city[key]}`);
      }
    };

    printObject(sydney);
    printObject(newYork);

9. Use the following variables to understand how JavaScript stores objects by reference.
    a) Create a new moreSports variable equal to teamSports and add some new sport
    values to it (using push and unshift)

    b) Create a new dog2 variable equal to dog1 and give it a new value

    c) Create a new cat2 variable equal to cat1 and change its name property

    d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
    changed? Why?

    e) Change the way the moreSports and cat2 variables are created to ensure the
    originals remain independent
    
    I. The value of the array and object did change due to the copies being direct references to the original
        address in memory of the object. The string did not change because the new string is a copy of the first one
        but exists in a different memory address.

    let teamSports = ["Hockey", "Cricket", "Volleyball"];
    let dog1 = "Bingo";
    let cat1 = { name: "Fluffy", breed: "Siberian" };
    let moreSports = [...teamSports];
    moreSports.push("Football")
    moreSports.unshift("Basketball");
    let dog2 = dog1;
    dog2 = "Oswald";
    let cat2 = {...cat1};
    cat2.name = "Max";
    console.log(teamSports);
    console.log(dog1);
    console.log(cat1);

10. The following constructor function creates a new Person object with the given name and age values.
    a) Create a new person using the constructor function and store it in a variable

    b) Create a second person using different name and age values and store it in a separate
    variable

    c) Print out the properties of each person object to the console

    d) Rewrite the constructor function as a class called PersonClass and use it to create a
    third person using different name and age values. Print it to the console as well.

    e) Add a canDrive method to both the constructor function and the class that returns true
    if the person is old enough to drive.
*/
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      canDrive() {
        return this.age > 15 ? true : false;
      }
    }

    let john = new Person("John", 28);
    let sarah = new Person("Sarah", 30);
    let bob = new Person("Bob", 40);
    
    console.log(john);
    console.log(sarah);
    console.log(bob);
    console.log(bob.canDrive());