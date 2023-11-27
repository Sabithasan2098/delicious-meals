import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../public/carusel-1.avif";
import banner2 from "../../../public/carusel-2.jpg";
import banner3 from "../../../public/carusel-3.avif";
import BannerInside from "./BannerInside";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner1} />

          <div>
            <BannerInside></BannerInside>
          </div>
        </div>
        <div>
          <img src={banner2} />
          <div>
            <BannerInside></BannerInside>
          </div>
        </div>
        <div>
          <img src={banner3} />
          <div>
            <BannerInside></BannerInside>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
