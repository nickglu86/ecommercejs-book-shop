import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartModal from '../components/CartModal';
import { useShopContext } from "../context/ShopContext";

const Layout: FC = () => {

  const { cartModal } = useShopContext();
  
  return (
    <>
      <Header />
      <Outlet />
      <CartModal isOpen={cartModal.isOpen} toggle={cartModal.toggle}></CartModal>
      <Footer />
    </>
  );
};
export default Layout;
