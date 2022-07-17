import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from '../../App'
const NavBar = (props) => {
  const {user} = props
  // const user = useContext(UserContext)
  return (
    <header>
      <nav className="nav navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid"> {user && <h6>Hello, {user.username} </h6>}</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/home" className='nav-link'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className='nav-link'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/landing" className='nav-link'>Landing</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
