import ParallaxImage from './ParallaxImage/ParallaxImage.js';
import heroPic from '../../assets/Mockups/DSC1789.jpg';
import FeaturedItems from './FeaturedItems/FeaturedItems.js';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

  //this bit of code handles the animation for featured works when entering viewport
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      // entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn')
      }
    })
  }

  // const Obs = new IntersectionObserver(inViewport);
  // const obsOptions = {};
  // const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  // ELs_inViewport.forEach(EL => {
  //   Obs.observe(EL, obsOptions);
  // });
  setTimeout(()=> {
    const options = {};
    const elements = document.querySelectorAll('.work');
    const header = document.querySelector('.FWheader');
    const myObserver = new IntersectionObserver(inViewport, options)
    myObserver.observe(header);
    elements.forEach(element => {
      myObserver.observe(element)
    })
  }, 300)
  
  return(
    <div className='home-page'>
      <div className='intro'>
        <div className='text'>
          <h2>Making Street and Culture Fashionable</h2>
          <p>Represent the Vietnamese culture with SouthWest VSA swag</p>
          <Link to='/shopping-cart/Shop'>
            <button className='shop-now-button'>Shop Now</button>
          </Link>
        </div>
        <ParallaxImage img={heroPic} info='placeholder img'/> 
        <div className='filter'/>
      </div>
      <FeaturedItems />
    </div>
  )
}

export default Home;