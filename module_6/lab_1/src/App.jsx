import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting.jsx";

function App() {
  const [count, setCount] = useState(0);

  // Lab 1 

  // const Greeting = ({ name, children }) => {
  //   return (
  //     <>
  //       <span>Hello {children ? children.name : name ? name : "World"}</span>
  //     </>
  //   );
  // };

  // export default Greeting;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Greeting name={"John"} />
    </>
  );
}

export default App;
