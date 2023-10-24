import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <img src="../../assets/logologopv.png" alt="" />
                </div>
                <div className="text">
                    <span className="first-span">CAROL SOLVAY</span>
                    <span>Mindset Mastery Mentor</span>
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;

