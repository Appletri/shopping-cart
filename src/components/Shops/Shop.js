import { UseWholeInventory } from "../Data/Inventory";
import { Link } from 'react-router-dom';
import './Shop.css';
import { useEffect, useState } from "react";

function Shop() {
  const [inventory, setInventory] = useState(UseWholeInventory());
  const [filter, setFilter] = useState('All');

  const handleClick = (e) => {
    const filtered = document.querySelector('.filtered');
    let newFilter = filter;
    newFilter = e.target.innerHTML;
    setFilter(newFilter);

    filtered.classList.toggle('filtered');
    e.target.classList.toggle('filtered');
  }

  useEffect(() => {
    let shownInventory = UseWholeInventory();
    let newInventory = shownInventory.filter(item => {
     return item.tags.includes(filter)
    })
    setInventory(newInventory);

  },[filter])

  return(
    <div className="shop">
      <div className="shop-filters">
        <div onClick={handleClick} className="shop-filter filtered">All</div>
        <div onClick={handleClick} className="shop-filter">Outerwear</div>
        <div onClick={handleClick} className="shop-filter">Shirts</div>
        <div onClick={handleClick} className="shop-filter">Pants</div>
        <div onClick={handleClick} className="shop-filter">Accessories</div>
      </div>
      <div className="shop-content">
        {inventory.map((item) => {
          return(
            <div className="shop-item">
              <Link to={`${item.id}`} state={item}>
                <div className="image-wrapper">
                  <img className="shop-images" src={item.image[0]} alt={item.name}></img>
                </div>
              </Link>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop;