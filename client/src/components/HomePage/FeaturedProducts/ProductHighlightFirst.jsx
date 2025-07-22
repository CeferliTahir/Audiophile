import { Link } from "react-router-dom";
import speaker from "../../../assets/home/desktop/image-speaker-zx9.png";

const ProductHighlightFirst = () => {
  return (
    <>
      <div className="bg-0002 rounded-[8px] sm:h-[560px] h-[600px] overflow-hidden relative sm:inline-block flex items-center justify-center">
        <img
          className="sm:w-[390px] sm:h-[480px] w-[170px] h-[210px] absolute top-[55px] sm:top-[90px] sm:left-28 sm:translate-x-0 left-1/2 -translate-x-1/2"
          src={speaker}
          alt="SORRY"
        />
        <div className="flex flex-col sm:items-start items-center text-center sm:text-start sm:gap-[40px] gap-6 absolute sm:right-[95px] sm:top-28 top-[290px]">
          <div className="flex cursor-default flex-col gap-6 sm:w-[349px] px-6 sm:px-0 font-manrope text-white items-center sm:items-start sm:justify-start justify-center">
            <h1 className="sm:text-[56px] text-4xl sm:w-0 w-[250px] font-bold sm:leading-[58px] leading-[40px] sm:tracking-[2px] tracking-[1.286px]">
              ZX9 SPEAKER
            </h1>
            <p className="text-[15px] leading-[25px] opacity-[0.75]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
          </div>
          <Link
            to="/products/speakers/zx9-speaker"
            className="text-white hover:bg-hover-0001 cursor-pointer bg-0001 py-[15px] px-[31.5px] font-manrope uppercase text-[13px] font-bold tracking-[1px]"
          >
            See Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductHighlightFirst;
