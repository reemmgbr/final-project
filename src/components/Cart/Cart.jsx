import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const {
    getCart,
    cartProducts,
    removeCart,
    totalprice,
    updateCart,
    clearCart,
    totalitems,
  } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="shadow-inner m-8 p-3">
        {" "}
        <div className="flex justify-between">
          <div>
            <h2 className="mt-10 mb-3 font-bold uppercase text-3xl text-[#51A451]">
              Your Cart
            </h2>
          </div>
          <button
            onClick={() => clearCart()}
            className="bg-[#d1e7dd] hover:bg-[#b3d6c9] text-black font-medium rounded px-4 py-2 self-center"
          >
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4 shadow-md">
              {" "}
              <p className="font-semibold text-[#51A451] text-xl">
                Total Items: <span className="text-xl">{totalitems}</span>
              </p>
              <div className="flex justify-between mt-2"></div>
            </div>

            <div className="bg-white shadow-md sm:rounded-lg">
              {cartProducts.map((cartProduct) => (
                <div
                  key={cartProduct.product.id}
                  className="flex items-center border-b dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-600 p-4"
                >
                  <img
                    src={cartProduct.product.imageCover}
                    className="w-16 md:w-32 max-w-full max-h-full mr-4"
                    alt="Product"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {cartProduct.product.title}
                    </h3>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateCart(
                            cartProduct.product.id,
                            cartProduct.count - 1
                          )
                        }
                        className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                        type="button"
                      >
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 18 2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="number"
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block px-2.5 py-1"
                        placeholder="0"
                        value={cartProduct.count}
                        onChange={(e) => {
                          // Implement onChange handler if needed
                        }}
                      />
                      <button
                        onClick={() =>
                          updateCart(
                            cartProduct.product.id,
                            cartProduct.count + 1
                          )
                        }
                        className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                        type="button"
                      >
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      Price: {cartProduct.price}
                    </p>
                    <button
                      onClick={() => removeCart(cartProduct.product.id)}
                      className="dark:text-green-500 hover:underline mt-2 text-green-500"
                    >
                      <i className="fa-solid fa-trash mx-2"></i>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Checkout Section */}
          <div className="bg-white shadow-md sm:rounded-lg p-4 border ">
            <h2 className="text-lg font-semibold  dark:text-white text-center text-black my-2">
              Place Order
            </h2>
            <div className="bg-[#51A451] w-[50%] mx-auto text-center text-white text-l font-medium py-2 rounded">
              <Link to="/Checkout">Debit/Creditcard</Link>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                Total:
              </h5>
              <p className="text-lg font-bold text-[#51A451] dark:text-white">
                {totalprice} EGP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
