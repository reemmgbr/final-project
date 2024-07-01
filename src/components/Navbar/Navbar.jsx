import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TokenContext } from "../../Context/TokenContext";
import { UserContext } from "../../Context/Usercontext";
import { CartContext } from "./../../Context/CartContext";
export default function Navbar() {
  let navigate = useNavigate();
  let { token, setToken } = useContext(TokenContext);
  let { user } = useContext(UserContext);
  let { getLoggedUserCart, cartitems } = useContext(CartContext);

  let [toggleNav, setToggleNav] = useState(false);

  function toggleNavbar() {
    setToggleNav(!toggleNav);
  }

  function logout() {
    localStorage.removeItem("TokenLokal");
    navigate("/login");

    setToken(null);
  }

  useEffect(() => {
    getLoggedUserCart();
  }, []);

  return (
    <>
      <nav className="bg-[#F8F9FA] sticky dark:bg-gray-900  w-full z-20 top-0 right-0 left-0  border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={""}
            className="flex items-center space-x-3 rtl:space-x-reverse text-3xl text-[#4D5963] my-3 "
          >
            <span className="self-center text-3xl font-bold whitespace-nowrap text-[#4D5963]">
              Fresh{" "}
            </span>
            Cart
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleNavbar}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={toggleNav ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center grow justify-around w-full md:flex md:w-auto md:order-1 ${
              toggleNav ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col  p-4 md:p-0 mt-4 mx-8  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {token ? (
                <>
                  <li>
                    <NavLink
                      to={""}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"Products"}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"Catrgories"}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Catrgories
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      to={"Brands"}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Brands
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}{" "}
            </ul>

            <ul className="ms-auto  flex flex-col md:flex-row">
              {token ? (
                <>
                  {" "}
                  <ul className="md:flex hidden">
                    {" "}
                    <Link>
                      {" "}
                      <li className="px-2">
                        <i className="fa-brands fa-instagram text-xl"></i>
                      </li>{" "}
                    </Link>
                    <Link>
                      {" "}
                      <li className="px-2">
                        <i className="fa-brands fa-facebook text-xl"></i>{" "}
                      </li>{" "}
                    </Link>
                    <Link>
                      {" "}
                      <li className="px-2">
                        <i className="fa-brands fa-x-twitter text-xl"></i>{" "}
                      </li>{" "}
                    </Link>
                    <Link>
                      {" "}
                      <li className="px-2">
                        <i className="fa-brands fa-youtube text-xl"></i>{" "}
                      </li>{" "}
                    </Link>
                    <Link>
                      {" "}
                      <li className="px-2">
                        <i className="fa-brands fa-linkedin text-xl"></i>{" "}
                      </li>{" "}
                    </Link>
                    <Link>
                      {" "}
                      <li className="px-2">
                        <i className="fa-brands fa-pinterest-p text-xl"></i>{" "}
                      </li>{" "}
                    </Link>
                  </ul>
                  <li className="px-2 relative">
                    <NavLink
                      to={"/Cart"}
                      className="block py-2 mx-10 md:mx-0 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      <i className="fa-solid fa-cart-shopping text-black text-2xl"></i>{" "}
                      <p className="absolute md:top-[-18px] md:right-[-2px]  right-[80%] top-[-20%] bg-green-500 text-white px-2 rounded-md">
                        {cartitems}
                      </p>
                    </NavLink>
                  </li>{" "}
                  <li className="px-2">
                    <NavLink
                      to={"Wishlist"}
                      className=" flex py-2 mx-10 md:mx-0 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      <i className="fa-regular fa-heart text-2xl text-green-500 "></i>
                      <p className="px-2 font-medium"> Favorites</p>
                    </NavLink>
                  </li>
                  <div>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-blue-green dark:focus:ring-green-800 mx-14 md:mx-0 my-3 md:my-0"
                      type="button"
                    >
                      {user.name}{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      className="z-10 font-medium hidden bg-white divide-y divide-black  rounded-lg shadow w-44 dark:bg-black  "
                    >
                      <ul
                        className="py-2 text-sm text-black  dark:text-black "
                        aria-labelledby="dropdownDefaultButton"
                      >
                        {/* <li>
                          <Link
                            to="/Yourprofile"
                            className="block px-4 py-2 hover:bg-green-500 dark:hover:bg-[#77D07 rounded8] dark:hover:text-white rounded"
                          >
                            Your Profile
                          </Link>
                        </li>{" "} */}
                        <li className="text-center w-full ">
                          <button
                            onClick={() => {
                              logout();
                            }}
                            href="#"
                            className="block px-4 py-2 hover:bg-green-500 dark:hover:bg-[#77D07 rounded8] dark:hover:text-white rounded"
                          >
                            Log Out{" "}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <li className="px-3">
                    <NavLink
                      to={"Login"}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Login
                    </NavLink>
                  </li>{" "}
                  <li className="px-3">
                    <NavLink
                      to={"Register"}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Register
                    </NavLink>
                  </li>{" "}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
