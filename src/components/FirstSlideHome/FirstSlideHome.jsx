import imge from "../../XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg";
import imgslidethree from "../../slider-image-5.009aeddf44bdc15c6619.png";
import imgsdlideone from "../../slider-image-3.e9246f1ed167885a8705.png";
import imgslidetwo from "../../slider-image-4.80544bff18da9fb1af7a.jpg";
import img from "../../XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg";
import Slider from "react-slick";

export default function FirstSlideHome() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto md:mt-12 mb-11">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="md:w-80 w-full mx-6 ">
          <Slider {...settings}>
            <div className="h-[100%]">
              <img
                src={imgsdlideone}
                className="w-full h-auto"
                alt="Slider Image 1"
              />
            </div>
            <div>
              <img
                src={imgslidetwo}
                className="w-full h-auto"
                alt="Slider Image 2"
              />
            </div>
            <div>
              <img
                src={imgslidethree}
                className="w-full h-auto"
                alt="Slider Image 3"
              />
            </div>
          </Slider>
        </div>
        <div className="mr-4">
          <img src={img} className="md:w-80 w-full" alt="Image 1" />
          <img src={imge} className="md:w-80 w-full" alt="Image 2" />
        </div>
      </div>
    </div>
  );
}
