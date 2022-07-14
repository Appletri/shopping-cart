import { Link } from 'react-router-dom';

function NavButtonMobile(props) {
  const handleClick = () => {
    const navMobile = document.querySelector('.nav-mobile');
    navMobile.classList.toggle('show');
  }
  return (
    <Link to={props.title} onClick={handleClick} className="nav-button">{props.title}</Link>
  );
}

export default NavButtonMobile;