import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Catrgories from "./components/Catrgories/Catrgories";
import Brands from "./components/Brands/Brands";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import Login from "./components/Login/Login";
import Register from "./components/regregister/Register";
import Details from "./Details/Details";
import TokenContextProvider from "./Context/TokenContext";
import { ProtectedRouts } from "./components/ProtectedRouts/ProtectedRouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CartContextProvider } from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/Checkout/Checkout";
import Allorders from "./components/Allorders/Allorders";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import VerifyCode from "./VerifyCode/VerifyCode";
import ResetPassword from "./ResetPassword/ResetPassword";
import WishList from "./WishList/WishList";
import SubCatagories from "./components/SubCatagories/SubCatagories";
import yourprofile from "./components/Yourprofile/Yourprofile";
import Yourprofile from "./components/Yourprofile/Yourprofile";
import UserProfyleProvider from "./Context/Profyle";
import UserContextProvider from "./Context/Usercontext";
function App() {
  let xx = new QueryClient();

  let routs = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRouts>
              <Home />
            </ProtectedRouts>
          ),
        },
        {
          path: "Cart",
          element: (
            <ProtectedRouts>
              <Cart />{" "}
            </ProtectedRouts>
          ),
        },

        {
          path: "Products",
          element: (
            <ProtectedRouts>
              <Products />
            </ProtectedRouts>
          ),
        },
        {
          path: "Catrgories",
          element: (
            <ProtectedRouts>
              <Catrgories /> {/*children */}
            </ProtectedRouts>
          ),
        },
        {
          path: "SubCategories/:id",
          element: (
            <ProtectedRouts>
              <SubCatagories />{" "}
            </ProtectedRouts>
          ),
        },
        {
          path: "ForgetPassword",
          element: <ForgetPassword />,
        },
        {
          path: "Brands",
          element: (
            <ProtectedRouts>
              <Brands />
            </ProtectedRouts>
          ),
        },
        {
          path: "Checkout",
          element: (
            <ProtectedRouts>
              <Checkout />
            </ProtectedRouts>
          ),
        },
        {
          path: "Yourprofile",
          element: (
            <ProtectedRouts>
              <Yourprofile />
            </ProtectedRouts>
          ),
        },
        {
          path: "WishList",
          element: (
            <ProtectedRouts>
              <WishList />
            </ProtectedRouts>
          ),
        },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "VerifyCode", element: <VerifyCode /> },
        { path: "ResetPassword", element: <ResetPassword /> },

        {
          path: "Details/:id",
          element: (
            <ProtectedRouts>
              <Details />
            </ProtectedRouts>
          ),
        },
        {
          path: "Allorders",
          element: (
            <ProtectedRouts>
              <Allorders />
            </ProtectedRouts>
          ),
        },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return (
    <>
      <UserContextProvider>
        <UserProfyleProvider>
          <CartContextProvider>
            <QueryClientProvider client={xx}>
              <ReactQueryDevtools initialIsOpen={false} />
              <TokenContextProvider>
                <RouterProvider router={routs} />
                <Toaster position="bottom-left" reverseOrder={false} />
              </TokenContextProvider>
            </QueryClientProvider>
          </CartContextProvider>
        </UserProfyleProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
