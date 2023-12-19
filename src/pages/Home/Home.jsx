import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import Slides from "../../Components/Home/Slides/Slides";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island</title>
      </Helmet>

      <Navbar />
      <Slides />
      <Footer />
    </div>
  );
};

export default Home;
