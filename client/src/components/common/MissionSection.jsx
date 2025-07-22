import aboutImgDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import aboutImgMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import aboutImgTablet from "../../assets/shared/tablet/image-best-gear.jpg";

const MissionSection = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between gap-10 sm:gap-[63px] md:gap-5 flex-col-reverse md:flex-row items-center sm:py-[200px] py-[120px] cursor-default">
          <div className="flex flex-col gap-8 md:w-[445px] font-manrope md:text-start text-center">
            <h1 className="sm:text-[40px] text-[28px] font-bold uppercase sm:leading-11 sm:tracking-[1.429px] tracking-[1px]">
              Bringing you the <span className="text-0002">best</span> audio
              gear
            </h1>
            <p className="text-[15px] leading-[25px] opacity-[0.5]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <img
            className="rounded-[8px] md:flex hidden min-w-[300px]"
            src={aboutImgDesktop}
            alt="Sorry"
          />
          <img
            className="rounded-[8px] sm:hidden"
            src={aboutImgMobile}
            alt="Sorry"
          />
          <img
            className="rounded-[8px] hidden sm:flex md:hidden"
            src={aboutImgTablet}
            alt="Sorry"
          />
        </div>
      </div>
    </>
  );
};

export default MissionSection;
