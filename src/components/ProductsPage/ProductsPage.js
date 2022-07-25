import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductsPage.css';
import Sizes from './Sizes';
import Add from './Add';

function ProductsPage(props) {
  const location = useLocation()
  const item = location.state;
  const [selectedSize, setSelectedSize] =  useState();
  const [size, setSize] = useState(false);
  const [quantity, setQuantity] = useState(false);
  const [itemImage, setItemImage] = useState(item.image[0])

  const select = (e) => {
    if (e.target.className === 'size in-stock') {
      setSelectedSize(e.target.innerHTML);
      setSize(true) 
    }
  }

  const handlePic = (e) => {
    setItemImage(e.target.src)
  }

  const handleChange = (e) => {
    if (parseInt(e.target.value) >= 1) {
      setQuantity(true)
    } else {
      setQuantity(false)  
    }  

  }

  return(
    <form className="product">
      <div className='album'>
        {item.image.map((picture) => {
          return (
            <div className='thumbWrapper'>
              <img onClick={handlePic} className='thumbnail' src={picture} alt='unavailable'></img>
            </div>
          )
        })}
      </div>
      <div className='imageWrapper'>
        <img className='item-image' src={itemImage} alt={item.name}></img>
      </div>
      <div className='text'>
        <h1 className='name'>{item.name}</h1>
        <div className='subtext'>
          <h3 className='price'>{'$' + item.price}</h3>
          <p>X</p>
          <input onChange={handleChange} className='quantity' type='number' min={1} max={10}></input>
        </div>
        <div className='sizes'>
          <Sizes size='s' select={select} item={item} selectedSize = {selectedSize}/>
          <Sizes size='m' select={select} item={item} selectedSize = {selectedSize}/>
          <Sizes size='l' select={select} item={item} selectedSize = {selectedSize}/>
          <Sizes size='xl' select={select} item={item} selectedSize = {selectedSize}/>
        </div>
        <ul className='item-info'>
          {item.info.map((detail) => {
            return (<li>{detail}</li>)
          })}
        </ul>
        <Add add={props.add} isQuantity={quantity} isSize={size} />
      </div>

    </form>
  )
}

export default ProductsPage