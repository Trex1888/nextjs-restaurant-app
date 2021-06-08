import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />{" "}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="http://www.kosherpizzaaventurafl.com/wp-content/uploads/2017/08/pizza-2530169_1920.jpg"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://www.honestburgers.co.uk/wp-content/uploads/2019/04/vegetarian-fritter-burger-page.jpg"
            alt="img"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="http://sweetpealifestyle.com/wp-content/uploads/2013/01/Easy-Paleo-Chicken-Salad-Sweetpea-Lifestyle-Not-too-Close-1.jpg"
            alt="img"
          />
        </div>
      </Carousel>
    </div>
  );
}
export default Banner;
