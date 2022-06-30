import { Link } from 'react-router-dom';
import './FeaturedItems.css';

function Item(props) {
  return(
    <div className='featured-item'>
      <Link to= {`products/${props.item.id}`} state={props.item}>
        <img id={props.id} className='image' src={props.item.image} alt={props.item.name} />
      </Link>
    </div>
  )
}


export default Item;