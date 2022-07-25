import './Checkout.css';

function Checkout(props) {
  let total = 0
  let shipping = 0

  const handleCheckoutClick = () => {
    const checkoutWindow = document.querySelector('.checkout');
    const checkoutFilter = document.querySelector('.checkout-filter');
    checkoutWindow.classList.toggle('checkout-hidden');
    checkoutFilter.style.display = 'none';
}
  return (
    <div>
      <div className='checkout-filter'></div>
      <div className='checkout checkout-hidden'>
        <div onClick={handleCheckoutClick} className="nav-close">x</div>
        <ol>
          {props.cart.map((item, index) => {

            const quantity = parseInt(item.quantity);
            const price = parseFloat(item.price.substring(1));
            total += (quantity * price);

            return(
              <li className='cart-item'>
                <div>
                  <img className='checkout-img' src={item.image} alt={item.name}></img>
                </div>
                <div className='checkout-info'>
                  <div>{item.name + ' ' + item.size}</div>
                  <div className='checkout-item'>
                    <div className='quantity-changer'>
                      <div id={index} onClick={props.decrease} className='quantity-button'>-</div>
                      <div className='quantity-display'>{item.quantity}</div>
                      <div id={index} onClick={props.increase} className='quantity-button'>+</div>
                    </div>
                    <p>{' x ' + item.price}</p>
                  </div>
                </div>
                <div id={index} className='remove-item' onClick={props.remove}>X</div>
              </li>
            )
          })}
        </ol>
        <hr className='line'></hr>
        <div className='total'>
          <div className='total-labels'>
            <p>Sub-total:</p>
            <p>Shipping:</p>
            <p>Total:</p>
          </div>
          <div className='total-values'>
            <p>${parseFloat(total).toFixed(2)}</p>
            <p>Free</p>
            <p>${parseFloat(total + shipping).toFixed(2)}</p>
          </div>
        </div>
        <hr className='line final'></hr>
        <button className='checkout-button'> Checkout </button>
      </div>
    </div>
  )
}

export default Checkout;