import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductsPage.css';

function ProductsPage(props) {
  const location = useLocation()
  const item = location.state;
  const [size, setSize] = useState(false)

  useEffect(() => {
    const addButt = document.querySelector('.add');
    if (size === true) {
      addButt.classList.toggle('nogo');
    }
  },[size])

  function getSizes(size) {
    if (item.size === 0) {
      return 'size sold-out'
    } else {
      return 'size in-stock'
    }
  }

  const select = (e) => {
    const sizes = document.querySelectorAll('.size')
    sizes.forEach((target) => target.classList.remove('selected'));
    e.target.classList.add('selected');
    setSize(true) 
  }

  return(
    <form className="product">
      <img src={item.image} alt={item.name}></img>
      <div className='text'>
        <h1 className='name'>{item.name}</h1>
        <div className='subtext'>
          <h3 className='price'>{'$' + item.price}</h3>
          <p>X</p>
          <input className='quantity' type='number' min={1} max={10}></input>
        </div>
        <div className='sizes'>
          <div onClick={select} className={getSizes('s')}>S</div>
          <div onClick={select} className={getSizes('m')}>M</div>
          <div onClick={select} className={getSizes('l')}>L</div>
          <div onClick={select} className={getSizes('xl')}>XL</div>
        </div>
        <button onClick={props.add} className='add nogo'>Add to Cart</button>
      </div>

    </form>
  )
}

export default ProductsPage