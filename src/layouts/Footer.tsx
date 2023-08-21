import { FC } from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/logos/instagram.png";
import facebook from "../assets/logos/facebook.png";

const Footer: FC = () => {
  return (
    <footer>
      <div className="social">
        <div>
          <h5>Follow Us:</h5>
          <div>
            <img src={instagram} height={28} />
            <img src={facebook} height={28} />
          </div>
        </div>
      </div>
      <div className="sitemap">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/nothing-here">Book Reviews</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="adress">
        <ul>
          <li>Location : Tel Aviv</li>
          <li>Phone : 054-5454545</li>
          <li>eMail : bookshop@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
