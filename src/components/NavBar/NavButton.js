import { Link } from 'react-router-dom';
 
const handleCheckoutClick = () => {
    const checkoutWindow = document.querySelector('.checkout');
    const checkoutFilter = document.querySelector('.checkout-filter');
    checkoutWindow.classList.toggle('checkout-hidden');
    checkoutFilter.style.display = 'block';
}

function NavButton(props) {
  return (
    <Link to={`/shopping-cart/${props.title}`} className="nav-button">{props.title}</Link>
  );
}

function NavButtonCheckout(props) {
  return (
    // <Link to={props.title} className="nav-button">
    // </Link>
    <div onClick={handleCheckoutClick} className='nav-button'>
      <img src={props.image} alt={props.title} />
      <div className='quantity-indicator'>{props.items.length}</div>
    </div>
  );
}

export {NavButton, NavButtonCheckout};