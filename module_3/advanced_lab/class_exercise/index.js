/*
Mimic a pizza making procedure, by writing code that prints statements in the below order:
Started preparing pizza ...
Made the base
Added the sauce and cheese
Added the pizza toppings
Cooked the pizza
Pizza is ready

Task 1: Create 6 JS functions which print the pizza processing
statements and call those functions in sequence. Use a mix of
function declarations, expressions and arrow functions.

Task 2: Make the functions asynchronous by using setTimeout with
different time durations, maintaining the right order.

Task 3: Modify the asynchronous functions to use Promises and
achieve the required result.

Task 4: Modify the functions to use async/await and achieve the
required result.
*/
const preparePizza = async () => {

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Started preparing pizza...'), 2000)
    });
    await promise.then(res => {
        console.log(res);
    })
}

const makeBase = async () => {
    
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Made the base'), 4000)
    });
    await promise.then(res => {
        console.log(res);
    })
}

const addSauceAndCheese = async () => {
    
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Added the sauce and cheese'), 6000)
    });
    await promise.then(res => {
        console.log(res);
    })
}

const addToppings = async () => {
    
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Added the pizza toppings'), 8000)
    });
    await promise.then(res => {
        console.log(res);
    })
}

const cookPizza = async () => {
    
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Cooked the pizza'), 12000)
    });
    await promise.then(res => {
        console.log(res);
    })
}

const finishPizza = async () => {

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Pizza is ready'), 14000)
    });
    await promise.then(res => {
        console.log(res);
    })
}

preparePizza();
makeBase();
addSauceAndCheese();
addToppings();
cookPizza();
finishPizza();