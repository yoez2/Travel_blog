import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const navigate = useNavigate();

  const handleAuth = () => {
    toggleAuth();
    navigate(loggedIn ? '/' : '/profile');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/logo.jpg" 
            alt="Travel Blog Logo" 
            className="logo-image"
          />
        </div>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/countries" className="nav-link">Countries</Link></li>
          {loggedIn && <li><Link to="/profile" className="nav-link">Profile</Link></li>}
          <li>
            <button 
              onClick={handleAuth}
              className="nav-button"
            >
              {loggedIn ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 