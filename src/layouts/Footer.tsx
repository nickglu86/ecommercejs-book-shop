import { Link } from "react-router-dom";
import instagram from "../assets/logos/instagram.png";
import facebook from "../assets/logos/facebook.png";
import BooksImg from "../assets/images/books.png";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          background: "linear-gradient(to bottom, #fff 0%,rgba(0,0,0,0) 100%)",
          zIndex: "-1",
        }}
      >
        <img
          src={BooksImg}
          style={{ width: "100%", height: "500px", opacity: "0.3" }}
        />
      </div>

      <div className="footer-content">
        <div className="sitemap">
          <div>
            Read 500 pages like this every day. <br />
            That's how knowledge works. It builds up, like compound interest.{" "}
            <br />
            All of you can do it, but I guarantee not many of you will do it.
          </div>
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
        <div>
          <div className="social">
            <div>
              <h5>Follow Us:</h5>
              <div>
                <img src={instagram} height={28} />
                <img src={facebook} height={28} />
              </div>
            </div>
          </div>

          <div className="adress">
            <ul>
              <li>Location : Tel Aviv</li>
              <li>Phone : 054-5454545</li>
              <li>eMail : bookshop@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
