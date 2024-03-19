import "./BigCats.css";
import { cats } from "../../src/cats.js";
import SingleCat from "../SingleCat/SingleCat.jsx";
import { useState } from "react";

const BigCats = () => {
  const [catList, setCatList] = useState([...cats]);

  const handleReverse = () => {
    let newList = [...cats];
    setCatList(newList.reverse());
  };

  const handleFilter = () => {
    setCatList(cats.filter((cat) => cat.latinName.includes("Panthera")));
  };

  const handleSort = () => {
    let newList = [...cats];

    setCatList(newList.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleReturn = () => {
    setCatList(cats);
  }

  return (
    <>
      <button onClick={handleSort}>Sort Alphabetically</button>
      <button onClick={handleReverse}>Reverse List</button>
      <button onClick={handleFilter}>Show Panthera Family</button>
      <button onClick={handleReturn}>Return to Normal</button>
      <div className={"FancyBox FancyBox-blue"}>
        {catList.map((cat) => (
          <SingleCat cat={cat} key={cat.id} />
        ))}
      </div>
    </>
  );
};

export default BigCats;
