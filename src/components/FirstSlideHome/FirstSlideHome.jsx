import imgSlideOne from "../../slider-image-3.e9246f1ed167885a8705.png";
import imgSlideTwo from "../../slider-image-4.80544bff18da9fb1af7a.jpg";
import imgSlideThree from "../../slider-image-5.009aeddf44bdc15c6619.png";
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
    <div className="container mx-auto md:mt-8 mb-11">
      <div className="w-[80%] mx-auto">
        <Slider {...settings}>
          <div className="flex justify-center items-center h-[100%]">
            <img
              src={imgSlideOne}
              className="w-full h-auto object-contain"
              alt="Slider Image 1"
            />
          </div>
          <div className="flex justify-center items-center h-[100%]">
            <img
              src={imgSlideTwo}
              className="w-full h-auto object-contain"
              alt="Slider Image 2"
            />
          </div>
          <div className="flex justify-center items-center h-[100%]">
            <img
              src={imgSlideThree}
              className="w-full h-auto object-contain"
              alt="Slider Image 3"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
