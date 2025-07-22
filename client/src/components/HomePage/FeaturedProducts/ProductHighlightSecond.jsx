import { Link } from "react-router-dom";
import speaker from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import speakerMobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";

const ProductHighlightSecond = () => {
  return (
    <>
      <div className="rounded-[8px] overflow-hidden relative">
        <img className="md:flex hidden" src={speaker} alt="SORRY" />
        <img className="flex sm:hidden" src={speakerMobile} alt="SORRY" />
        <div className="text-0001 font-bold font-manrope flex flex-col items-start gap-8 absolute top-[100px] sm:left-[95px] left-6">
          <h1 className="text-[28px] tracking-[2px] cursor-default">
            ZX7 SPEAKER
          </h1>
          <Link
            to="/products/speakers/zx7-speaker"
            className="text-[13px] hover:bg-0001 hover:text-white cursor-pointer uppercase tracking-[1px] py-[15px] px-[31.5px] border"
          >
            See Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductHighlightSecond;
