function diceRoll(num, num2, name1) {
    console.log(`This is the d${num2} dice and has ${num2} sides.`);
    document.getElementById(name1).innerHTML = numberMinMax(num, num2);

}

function numberMinMax(min, max) {
    const diceRoll = Math.floor(Math.random() * (max - min + 1)) + min;
    return diceRoll;
}
