import { Link } from "react-router-dom";
import speaker from "../../../assets/home/desktop/image-earphones-yx1.jpg";

const ProductHighlightThird = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col items-center justify-between gap-6 sm:gap-0">
        <div>
          <img className="rounded-[8px]" src={speaker} alt="SORRY" />
        </div>
        <div className="rounded-[8px] bg-0003 sm:w-[540px] sm:py-[97px] sm:px-[95.6px] w-full py-[41px] px-[25.5px]">
          <div className="text-0001 font-bold font-manrope flex flex-col items-start gap-8">
            <h1 className="text-[28px] tracking-[2px] cursor-default">
              YX1 EARPHONES
            </h1>
            <Link
              to="/products/earphones/yx1-earphones"
              className="text-[13px] cursor-pointer hover:bg-0001 hover:text-white uppercase tracking-[1px] py-[15px] px-[31.5px] border"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHighlightThird;
