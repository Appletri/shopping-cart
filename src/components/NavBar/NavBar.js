import './NavBar.css';
import { NavButton, NavButtonCheckout} from './NavButton.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import shoppingCart from '../../assets/shopping-cart.svg';
import logo from '../../assets/SWUVSA_Logo.svg';
import logoName from '../../assets/SWUVSA_Logo.png';
import Checkout from '../Checkout/Checkout';

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


      <div>
        {isDesktop ? (

        <div className='nav-bar'>
          <div className='nav-left'>
            <Link to='/shopping-cart' className='home'>{props.name}</Link>
          </div>
          <img className='logo' src={logo} alt='logo'/>
          <div className='nav-right'>
            <NavButton title="Shop" />
            <NavButtonCheckout title="Checkout" image={shoppingCart} 
            items={props.items}/>
          </div>
          <Checkout cart={props.items} remove={props.remove} 
          increase={props.increase} decrease={props.decrease}/>
        </div>

        ) : (
        <div className='nav-bar'>
          <div className='nav-left-mobile'>
            <Link to='/shopping-cart' className='home'>
              <img className='logoName' src={logoName} alt='logo'/>
            </Link>
          </div>
          <div className='nav-right-mobile'>
            <NavButton title="Shop" />
            <NavButtonCheckout title="Checkout" image={shoppingCart} 
            items={props.items}/>
          </div>
          <Checkout cart={props.items} remove={props.remove} 
          increase={props.increase} decrease={props.decrease}/>
        </div>
        )}
      </div>
  );
}

export default NavBar;