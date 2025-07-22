import { Link } from "react-router-dom";

const RelatedCard = ({ image, name, slug, category }) => {
  return (
    <>
      <div className="flex flex-col sm:gap-10 gap-8 sm:w-[350px]">
        <img
          className="rounded-[8px] md:flex hidden"
          src={`${import.meta.env.VITE_BASE_URL}${image.desktop}`}
          alt="SORRY"
        />
        <img
          className="rounded-[8px] sm:hidden flex"
          src={`${import.meta.env.VITE_BASE_URL}${image.mobile}`}
          alt="SORRY"
        />
        <img
          className="rounded-[8px] md:hidden sm:flex hidden"
          src={`${import.meta.env.VITE_BASE_URL}${image.tablet}`}
          alt="SORRY"
        />
        <div className="flex flex-col items-center gap-8 font-manrope">
          <h1 className="text-[24px] cursor-default font-bold tracking-[1.714px] uppercase">
            {name}
          </h1>
          <Link
            className="bg-0002 text-[13px] cursor-pointer hover:bg-hover-0002 font-bold tracking-[1px] py-[15px] px-[29.5px] uppercase text-white"
            to={`/products/${category}/${slug}`}
          >
            See Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default RelatedCard;
