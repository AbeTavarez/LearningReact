import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from '../../App'
const NavBar = (props) => {
  const {user} = props
  // const user = useContext(UserContext)
  return (
    <header>
        {user && <h6>Hello, {user.username} </h6>}
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
