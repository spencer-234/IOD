import { useState } from "react";

const AddCatForm = ({ addCat }) => {
    
const [name, setName] = useState('');
const [latinName, setLatinName] = useState('');
const [image, setImage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const cat = {
        name: name,
        latinName: latinName,
        image: image,
    }
    addCat(cat);
}

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add New Cat:</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="latinName">Latin Name:</label>
        <input type="text" id="latinName" onChange={(e) => setLatinName(e.target.value)}/>
        <label htmlFor="imgLink">Image Link:</label>
        <input type="text" id="imgLink" onChange={(e) => setImage(e.target.value)}/>
        <button>Add Cat</button>
    </form>
  );
};

export default AddCatForm;
