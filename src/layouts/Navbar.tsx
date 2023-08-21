import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {

      return(
            <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
      )
}
export default Navbar;