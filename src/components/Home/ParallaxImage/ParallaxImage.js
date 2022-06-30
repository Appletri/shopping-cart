import './ParallaxImage.css';
import { useState, useEffect } from 'react';

function ParallaxImage(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <div className= 'wrapper'>
      <div className='parallax' style={{ transform: `translateY(${ offsetY * 0.3}px)`}}>
        <img className = 'background' src={props.img} alt={props.info}/>
      </div>
    </div>
  );
}

export default ParallaxImage;