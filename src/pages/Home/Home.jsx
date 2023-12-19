import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Home/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mobile Island</title>
      </Helmet>

      <Navbar />
    </div>
  );
};

export default Home;
