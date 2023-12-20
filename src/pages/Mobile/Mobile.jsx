import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";

const Mobile = () => {
  const mobile = useLoaderData();

  console.log(mobile);

  return (
    <div>
      <Helmet>
        <title>Mobile Island | Mobile</title>
      </Helmet>

      <Navbar />

      <div className="grid md:grid-cols-2 gap-10 px-4 md:px-10 lg:px-20 py-20">
        <div className="flex justify-center">
          <img src={mobile.image} alt="" />
        </div>

        <div className="pt-2">
          <div className="flex justify-end items-center pb-2">
            <div className="flex items-center gap-8">
              <div className="relative bg-cover bg-no-repeat">
                <button className="btn btn-sm text-xl text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-125 px-0">
                  <FaRegHeart />
                </button>
              </div>

              <div className="relative bg-cover bg-no-repeat">
                <button className="btn btn-sm text-xl text-black hover:text-primary rounded-none bg-transparent hover:bg-transparent border-none shadow-none transition duration-500 ease-in-out hover:scale-125 px-0">
                  <RiShoppingCart2Line />
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium">{mobile.name}</h3>

          <div className="pt-2">
            <p>
              <span className="font-medium">Release Date: </span>
              {mobile.release_date}
            </p>

            <p>
              <span className="font-medium">Resolution: </span>
              {mobile.display.main.resolution}
            </p>

            <p>
              <span className="font-medium">Refresh Rate: </span>
              {mobile.display.main.refresh_rate}Hz
            </p>

            <p>
              <span className="font-medium">Peak Brightness: </span>
              {mobile.display.main.peak_brightness}
            </p>

            <p>
              <span className="font-medium">Main Camera: </span>
              {mobile.camera?.rear?.main}
            </p>

            <p>
              <span className="font-medium">Ultrawide Camera: </span>
              {mobile.camera?.rear?.ultrawide}
            </p>

            <p>
              <span className="font-medium">Telephoto Camera: </span>
              {mobile.camera?.rear?.telephoto1}
            </p>

            <p>
              <span className="font-medium">Front Camera: </span>
              {mobile.camera?.front?.main}
            </p>

            <p>
              <span className="font-medium">Telephoto Camera: </span>
              {mobile.camera?.rear?.telephoto2}
            </p>

            <div className="flex gap-2">
              <span className="font-medium">RAM: </span>
              {mobile.ram.capacity.map((capacity, idx) => (
                <div key={idx}>{capacity}GB</div>
              ))}
            </div>

            <div className="flex gap-2">
              <span className="font-medium">Storage: </span>
              {mobile.storage.capacity.map((capacity, idx) => (
                <div key={idx}>
                  {capacity === 1 ? (
                    <span>1TB</span>
                  ) : (
                    <span>{capacity}GB</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-black">
              <span className="font-medium">Battery: </span>
              {mobile.battery?.capacity}mAH
            </p>

            <p className="text-black">
              <span className="font-medium">Fast Charging: </span>
              {mobile.battery.fast_charging}
            </p>

            <p className="text-black">
              <span className="font-medium">Wireless Charging: </span>
              {mobile.battery?.wireless_charging}
            </p>

            {mobile.battery.magsafe_charging ? (
              <p className="text-black">
                <span className="font-medium">Wireless Charging: </span>
                {mobile.battery?.magsafe_charging}
              </p>
            ) : (
              ""
            )}

            <p className="text-black">
              <span className="font-medium">Processor: </span>
              {mobile.processor}
            </p>

            <p className="text-black">
              <span className="font-medium">OS: </span>
              {mobile.operating_system}
            </p>

            <p className="text-black">
              <span className="font-medium">IP Rating: </span>
              {mobile.additional_features?.water_resistance}
            </p>

            <p className="text-black">
              <span className="font-medium">Security: </span>
              {mobile.additional_features?.security}
            </p>

            <p className="text-black">
              <span className="font-medium">Material: </span>
              {mobile.additional_features?.material}
            </p>

            <p className="text-black">
              <span className="font-medium">Connectivity: </span>
              {mobile.additional_features?.connectivity}
            </p>

            <p className="text-black">
              <span className="font-medium">Price: </span>${mobile.price}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mobile;
