import './NavBar.css';
import { NavButton, NavButtonCheckout} from './NavButton.js';
import NavBarMobile from './NavBarMobile';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import shoppingCart from '../../assets/shopping-cart.svg';
import logo from '../../assets/SWUVSA_Logo.svg';

function NavBar(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 565);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 565);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='shopping-cart' className='home'>{props.name}</Link>
      </div>
      <img className='logo' src={logo} alt='logo'/>


      <div>
        {isDesktop ? (
          <div className='nav-right'>
            <NavButton title="Shop" />
            <NavButtonCheckout title="Checkout" image={shoppingCart} 
            items={props.items}/>
          </div>
        ) : (
          <div className='nav-right'>
            <NavBarMobile />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;