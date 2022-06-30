import { Link } from 'react-router-dom';

function NavButton(props) {
  return (
    <Link to={'shopping-cart/' + props.title} className="nav-button">{props.title}</Link>
  );
}

function NavButtonCheckout(props) {
  return (
    <Link to={'shopping-cart/' + props.title} className="nav-button">
      <img src={props.image} alt={props.title} />
      <div className='quantity-indicator'>{props.items.length}</div>
    </Link>
  );
}

export {NavButton, NavButtonCheckout};