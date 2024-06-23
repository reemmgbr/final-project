import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import Loadingsmall from "./../components/Loadingsmall/Loadingsmall";

export default function WishListContextProvider() {
  const [loading, setLoading] = useState(true);
  let { addProductCart } = useContext(CartContext);
  const [wishlists, setWishlists] = useState(null);

  function getProductWishlist() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: { token: localStorage.getItem("TokenLokal") },
      })
      .then((data) => {
        data;
        setWishlists(data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        error;
        setLoading(false);
      });
  }

  useEffect(() => {
    getProductWishlist();
  }, []);

  function removeFromWishList(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: { token: localStorage.getItem("TokenLokal") },
      })
      .then((data) => {
        data.data.data;
        toast.success("Successfully Deleted!");
        setWishlists((products) =>
          products.filter((product) => product._id !== id)
        );
      })
      .catch((error) => {
        error;
      });
  }

  if (loading) {
    return <Loadingsmall />;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-5 rounded-lg ">
        {wishlists?.length ? (
          <h1 className="text-3xl font-bold  mb-8 text-black">
            Your Favorites
          </h1>
        ) : null}
        {wishlists?.length === 0 ? (
          <div className="flex flex-col justify-center items-center my-24">
            <i className="fa-regular fa-heart text-7xl text-black font-medium"></i>
            <p className="font-medium text-3xl py-5">You Have No Favorites</p>
          </div>
        ) : null}

        {wishlists?.map((wishlist) => (
          <div
            key={wishlist._id}
            className="flex items-center justify-between border-b-2 border-gray-200 py-4 transition-all duration-300 hover:bg-gray-200"
          >
            <div className="flex items-center space-x-4">
              <img
                src={wishlist.imageCover}
                alt={wishlist.slug}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{wishlist.slug}</h3>
                <p className="text-green-600 font-semibold">
                  {wishlist.price} EGP
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => addProductCart(wishlist._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md transition-all hover:bg-green-600 focus:bg-green-600 focus:outline-none"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishList(wishlist._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md transition-all hover:bg-red-600 focus:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
