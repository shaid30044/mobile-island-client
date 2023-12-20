import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island | Cart</title>
      </Helmet>

      <Navbar />
      <Footer />
    </div>
  );
};

export default Cart;
