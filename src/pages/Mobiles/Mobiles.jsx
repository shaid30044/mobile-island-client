import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Filter from "../../Components/Mobiles/Filter.jsx/Filter";

const Mobiles = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island | Mobiles</title>
      </Helmet>

      <Navbar />

      <div className="bg-past px-4 md:px-10 lg:px-20 py-6">
        <Filter />
      </div>

      <Footer />
    </div>
  );
};

export default Mobiles;
