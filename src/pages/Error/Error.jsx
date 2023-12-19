import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import phone from "../../assets/pexels-markus-winkler-3639873.jpg";
import Button from "../../Components/Button/Button";

const Error = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-past h-screen p-4">
      <div className="grid lg:grid-cols-2 bg-white h-full">
        <div className="relative p-6 md:px-20 md:py-10">
          {/* logo */}

          <div className="w-48">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-12" />
              <p className="text-2xl font-semibold text-primary">
                Mobile Island
              </p>
            </Link>
          </div>

          <div className="flex flex-col justify-center h-[70vh]">
            <div className="pb-10">
              <p className="text-lg text-black">ERROR 404</p>

              <h3 className="text-3xl font-bold pt-4">Page not found!</h3>

              <p className="font-medium">
                Oops... you may have mistype the address or the page may have
                moved.
              </p>
            </div>

            <div>
              <span onClick={handleBackToHome}>
                <Button type={"Back to Home"} />
              </span>
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-10 text-sm">
            Copyright © 2023 - All right reserved
          </div>
        </div>

        <div className="relative hidden lg:block overflow-hidden bg-cover bg-no-repeat">
          <img
            src={phone}
            alt="phone"
            className="transition-transform duration-[2000ms] ease-in-out transform hover:-translate-y-20 xl:hover:-translate-y-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
