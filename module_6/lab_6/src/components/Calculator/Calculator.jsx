import { useState } from "react";
import './calculator.css';

const Calculator = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("");
  let sum;

  const handleSum = () => {
    const num1 = Number(first);
    const num2 = Number(second);

    switch (operator) {
      case "+":
        sum = num1 + num2;
        break;
      case "-":
        sum = num1 - num2;
        break;
      case "*":
        sum = num1 * num2;
        break;
      case "/":
        sum = num1 / num2;
        break;
      case "%":
        sum = num1 % num2;
        break;
      default:
        sum = "err";
    }
  };

  first && second && operator && handleSum();

  return (
    <>
      <label htmlFor="num1">First Number:</label>
      <input
        type="number"
        id="num1"
        onChange={(e) => setFirst(e.target.value)}
      />
      <label htmlFor="operator">Operator:</label>
      <input
        type="text"
        id="operator"
        onChange={(e) => setOperator(e.target.value)}
      />
      <label htmlFor="num2">Second Number:</label>
      <input
        type="number"
        id="num2"
        onChange={(e) => setSecond(e.target.value)}
      />
      {sum && (
        <span className="expression">
            {`${first} ${operator} ${second} = ${sum}`}
        </span>
      )}
    </>
  );
};

export default Calculator;
