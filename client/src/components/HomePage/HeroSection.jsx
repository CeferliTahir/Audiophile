import { Link } from "react-router-dom";
import product from "../../assets/home/desktop/test.png";
import productMobile from "../../assets/home/mobile/test.png";
import productTablet from "../../assets/home/tablet/test.png";
const HeroSection = () => {
  return (
    <>
      <div className="bg-0001 relative">
        <div className="container">
          <div className="flex  md:justify-between justify-center h-[500px]  md:h-[100%] md:items-start items-center">
            <div className="flex flex-col md:items-start items-center md:gap-10 gap-6 sm:gap-10  md:pt-[128px] z-10 text-center md:text-start font-manrope text-white">
              <div className="flex flex-col md:gap-6 cursor-default">
                <p className="text-[14px] tracking-[10px] opacity-[0.4964]">
                  NEW PRODUCT
                </p>
                <h1 className="md:text-[56px] text-4xl font-bold md:leading-[58px] leading-10 md:tracking-[2px] tracking-[1.286px] pt-4 md:pt-0 pb-6 md:pb-0">
                  XX99 Mark II <br /> Headphones
                </h1>
                <p className="text-[15px] leading-[25px] opacity-[0.75]">
                  Experience natural, lifelike audio and exceptional <br />
                  build quality made for the passionate music <br /> enthusiast.
                </p>
              </div>
              <Link
                to="/products/headphones/xx99-mark-two-headphones"
                className="bg-0002 w-[160px] text-[13px] cursor-pointer hover:bg-hover-0002 font-bold tracking-[1px] text-center py-[15px] uppercase"
              >
                See Product
              </Link>
            </div>
            <div className="md:flex hidden">
              <img className="w-full" src={product} alt="SORRY" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex">
          <img
            className="w-full absolute top-0 right-0"
            src={productMobile}
            alt="SORRY"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
