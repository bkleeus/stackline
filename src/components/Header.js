import logo from '../stackline_logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} className="logo" alt="logo" />
        </header>
    )
}

export default Header;