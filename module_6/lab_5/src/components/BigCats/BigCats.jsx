import "./BigCats.css";
import { cats } from "../../cats.js";
import SingleCat from "../SingleCat/SingleCat.jsx";
import { useState } from "react";
import AddCatForm from "../AddCatForm/AddCatForm.jsx";

const BigCats = () => {
  const [catList, setCatList] = useState([...cats]);

  const addCat = (newCat) => {
    newCat.id = catList.length + 1;
    setCatList([...catList, newCat]);
  };

  const removeCat = (id) => {
    setCatList(catList.filter((cat) => cat.id !== id));
  }

  return (
    <>
      <AddCatForm addCat={addCat} />
      <div className={"FancyBox FancyBox-blue"}>
        {catList.map((cat) => (
          <>
            <SingleCat cat={cat} key={cat.id} />
            <button onClick={() => removeCat(cat.id)}>Delete Cat</button>
          </>
        ))}
      </div>
    </>
  );
};

export default BigCats;
