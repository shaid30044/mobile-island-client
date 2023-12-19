import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../../assets/logos/logo.png";

const Navbar = () => {
  const pages = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Mobiles",
      path: "/mobiles",
    },
    {
      page: "Cart",
      path: "/cart",
    },
    {
      page: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="bg-white grid grid-cols-2 sm:grid-cols-4 items-center px-4 md:px-10 lg:px-20 py-2 md:py-4">
      {/* logo */}

      <div className="w-40">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <p className="text-2xl font-semibold text-primary">Mobile Island</p>
        </Link>
      </div>

      {/* for medium & large device */}

      <div className="hidden col-span-2 sm:flex justify-center">
        <ul className="flex gap-10 text-lg">
          {pages.map(({ page, path }) => (
            <li key={page}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-primary pb-0.5" : ""
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
