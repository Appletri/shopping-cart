import './FeaturedItems.css';
import Item from './Item.js';
import { UseInventory } from '../../Data/Inventory';

function FeaturedItems() {

  return (
    <div className='featured-items'>
      <h1 className='FWheader'>Featured Items</h1>
      <div className='featured-section'>
        <Item item={UseInventory('Grey Hoodie')} />
        <Item item={UseInventory('Heathered Grey Hoodie')} />
        <Item item={UseInventory('Maroon Hoodie')}/>
      </div>
      <div className='divider'>Southwest Union of Vietnamese Student Associations
      <div className='divider-bar'></div>
      </div>
      <div className='featured-section'>
        <Item item={UseInventory('SWUVSA Crewneck')}/>
        <Item item={UseInventory('Longevity Crewneck')}/>
        <Item item={UseInventory('Dễ Thương Crewneck')}/>
      </div>
    </div>
  );
}

export default FeaturedItems;