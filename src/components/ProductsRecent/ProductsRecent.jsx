import { Fragment, useContext } from "react";
import style from "./ProductsRecent.module.css";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "./../../Context/CartContext";
export default function ProductsRecent() {
  let { addProductCart } = useContext(CartContext);
  // let { addToWishList } = useContext(WishListContext);
  function getProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  const { data, isLoading } = useQuery({
    queryKey: ["ProductsRecent"],
    queryFn: getProduct,
  });
  data;
  // const [products, seProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // function getProduct() {
  //   setIsLoading(true);

  //   return axios
  //     .get("https://ecommerce.routemisr.com/api/v1/products")
  //     .then((data) => {
  //       seProducts(data.data.data);
  //       setIsLoading(false);
  //        (data.data.data);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);

  //        (error);
  //       seProducts(error);
  //     });
  // }
  // useEffect(() => {
  //   getProduct();
  // }, []);
  function addToWishList(productId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/wishlist?",
        {
          productId,
        },
        { headers: { token: localStorage.getItem("TokenLokal") } }
      )
      .then((data) => {
        data;
      })
      .catch((error) => {
        error;
      });
  }
  if (isLoading) {
    return (
      <div className=" flex justify-center items-center ">
        <Loading />
      </div>
    );
  }
  return (
    <Fragment>
      <div className="container mx-auto  ">
        <div className="flex justify-center items-center  "></div>
        <h1 className="font-medium text-3xl pb-5 mt-7 px-3 md:px-0 ">
          Featured Products
        </h1>
        <div className="flex flex-wrap md:mx-2 mx-3 md:my-0 my-11">
          {data?.data.data.map((product) => (
            <div key={product.id} className={`md:w-1/6 p-1 relative`}>
              <div className={` ${style.border} rounded-lg`}>
                <Link to={`/Details/${product.id}`}>
                  {" "}
                  <div className="">
                    {" "}
                    <img
                      className="w-full px-6"
                      src={product.imageCover}
                      alt={product.name}
                    />
                    <h2 className="text-green-400 py-1">
                      {product.category.name}{" "}
                    </h2>
                    <p className="font-semibold">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <div className="flex justify-between items-center py-2 ">
                      <p>
                        {" "}
                        {product.price}
                        <span className="font-semibold"> EGP</span>{" "}
                      </p>{" "}
                      <p>
                        {product.ratingsAverage}
                        <i
                          className={`fa-solid fa-star ${style.icon} px-2`}
                        ></i>{" "}
                      </p>
                    </div>
                  </div>
                </Link>{" "}
                <div className="flex justify-center">
                  {" "}
                  <button
                    onClick={() => {
                      addProductCart(product.id);
                    }}
                    className={` bg-green-500  text-white px-8 py-1 rounded-md ${style.btn} `}
                  >
                    + Add
                  </button>{" "}
                </div>
                <button
                  onClick={() => {
                    addToWishList(product.id);
                  }}
                >
                  <i className="fa-solid fa-heart absolute right-5 top-5 bg-white shadow-md rounded-full p-1 text-[#E6E4E4] text-3xl hover:text-[#FF0000]  duration-1000"></i>
                </button>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
