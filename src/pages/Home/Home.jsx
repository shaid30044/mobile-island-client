import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island</title>
      </Helmet>

      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
