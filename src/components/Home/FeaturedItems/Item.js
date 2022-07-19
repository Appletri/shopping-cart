import { Link } from 'react-router-dom';
import './FeaturedItems.css';

function Item(props) {
  return(
    <div className='featured-item'>
      <Link to= {`Shop/${props.item.id}`} state={props.item}>
        <img id={props.item.id} className='image' src={props.item.image[0]} alt={props.item.name} />
      </Link>
    </div>
  )
}


export default Item;