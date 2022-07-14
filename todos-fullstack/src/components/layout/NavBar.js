import { NavLink } from "react-router-dom";

const NavBar = ({user}) => {
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
