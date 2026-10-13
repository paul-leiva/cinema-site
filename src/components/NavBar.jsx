import { Link } from "react-router-dom"
import '../css/NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/cinema-site">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/cinema-site" className="nav-link">Home</Link>
        <Link to="/cinema-site/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar
