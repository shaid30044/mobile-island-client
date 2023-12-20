import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import AllMobiles from "../../Components/Mobiles/AllMobiles/AllMobiles";

const Mobiles = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island | Mobiles</title>
      </Helmet>

      <Navbar />
      <AllMobiles />

      {/* <div className="bg-past px-4 md:px-10 lg:px-20 py-6">
          <Filter />
        </div> */}

      <Footer />
    </div>
  );
};

export default Mobiles;
