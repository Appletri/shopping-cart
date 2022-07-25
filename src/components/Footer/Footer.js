import './Footer.css';
import mail from '../../assets/mail.svg';
import linkedin from '../../assets/linkedin.svg';

function Footer(props) {
  return(
    <footer>
      <div className='footer-left'>
        <h2>Be a Part of SWUVSA</h2>
        <p>Get the latest update on SWUVSA merch and swag</p>
        <div className='subscribe'>
          <input type='email' placeholder='Enter your Email'></input>
          <button type='submit'>Subscribe</button>
        </div>
      </div>
      <div className='footer-center'>
        <h3>Let's Connect</h3>
        <p>Get in touch for opportunites or just to say hi!</p>
        <div className='contact-links'>
          <img src={mail} alt='email icon' />
          <a href="https://www.linkedin.com/in/tri_duc_lam" target={'blank'}><img src={linkedin} alt='linkedin icon' /></a>
        </div>
      </div>
      <div className='footer-right'>
        <h3>Check out our:</h3>
        <a href='https://github.com/Appletri'>FAQ</a>
        <a href='https://github.com/Appletri'>About</a>
        <a href='https://github.com/Appletri'>Customer Support</a>
      </div>
    </footer>
  );
}

export default Footer;