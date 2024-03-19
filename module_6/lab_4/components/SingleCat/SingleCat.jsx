import './SingleCat.css';
const SingleCat = ({ cat }) => {
  return (
    <div className='catlist'>
        <h1>{cat.name}</h1>
        <h2>{cat.latinName}</h2>
        <img src={cat.image} alt="cat image" className='catImage'/>
    </div>
  )
}

export default SingleCat
