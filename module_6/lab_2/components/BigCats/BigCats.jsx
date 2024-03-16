import "./BigCats.css";
import { cats } from "../../src/cats.js";
import SingleCat from "../SingleCat/SingleCat.jsx";

const BigCats = () => {
  return (
    <>
      <div className={"FancyBox FancyBox-blue"}>
        {cats.map((cat) => (
          <SingleCat cat={cat} key={cat.id}/>
        ))}
      </div>
    </>
  );
};

export default BigCats;
