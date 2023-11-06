import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/">
            <div>
              <img src={logo} height={100} />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link to="/nothing-here">Book Reviews</Link>
        </li> */}
      </ul>
    </nav>
  );
};
export default Navbar;
