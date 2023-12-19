import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Slides from "../../Components/Home/Slides/Slides";
import BrandsLogo from "../../Components/Home/BrandsLogo/BrandsLogo";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island</title>
      </Helmet>

      <Navbar />
      <Slides />
      <BrandsLogo />
      <Footer />
    </div>
  );
};

export default Home;
