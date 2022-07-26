import './FeaturedItems.css';
import Item from './Item.js';
import { UseInventory } from '../../Data/Inventory';

function FeaturedItems() {

  return (
    <div className='featured-items'>
      {/* <h1 className='FWheader'>Featured Items</h1> */}
      <div className='featured-section'>
        <Item item={UseInventory('Dep Trai Tee Design 2')} />
        <Item item={UseInventory('SWUVSA Design White')} />
        <Item item={UseInventory('Dep Gai Tee Design 2')}/>
      </div>
      <div className='divider'>Southwest Union of Vietnamese Student Associations
      <div className='divider-bar'></div>
      </div>
      <div className='featured-section'>
        <Item item={UseInventory('SWUVSA Crewneck')}/>
        <Item item={UseInventory('Longevity Crewneck')}/>
        <Item item={UseInventory('De Thuong Crewneck')}/>
      </div>
    </div>
  );
}

export default FeaturedItems;