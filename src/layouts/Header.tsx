import Navbar from "./Navbar";
import CartImage from "../assets/images/cart.png";
import { useShopContext } from "../context/ShopContext";

const Header = () => {
 
      const { cartModal } = useShopContext();
      return(
            <header >
                  <Navbar />
                  <div style={{
                        position: 'absolute',
                        right: '15vw',
                        top: '36px',
                        cursor: 'pointer'
                        }}>
                        <img src={CartImage} alt="cart" width={40} height={40} onClick={cartModal.toggle} />
                  </div>
            </header>
      )
}
export default Header;