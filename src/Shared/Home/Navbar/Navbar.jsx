import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../../assets/logos/logo.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import Button from "../../../Components/Button/Button";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white grid grid-cols-2 sm:grid-cols-4 items-center px-4 md:px-10 lg:px-20 py-2 md:py-4">
      {/* logo */}

      <div className="w-6 lg:w-40">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <p className="hidden lg:block text-2xl font-semibold text-primary">
            Mobile Island
          </p>
        </Link>
      </div>

      {/* for medium & large devices */}

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

      <div className="flex justify-end items-center">
        <Link to="/signIn">
          <Button type={"Sign In"} />
        </Link>

        {/* for small devices */}

        <div className="sm:hidden">
          <button
            onClick={toggleDrawer}
            className="btn btn-sm bg-transparent hover:bg-transparent text-2xl shadow-none border-none drawer-button pr-0"
          >
            <CgMenuRight />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            duration={400}
            size={300}
          >
            <div className="bg-past p-4">
              <ul className="flex flex-col justify-center items-center gap-6 text-lg bg-white py-10">
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
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
