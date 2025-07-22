import { Link } from "react-router-dom";

const ListCard = ({ product, reverse }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-8 sm:gap-[52px] md:gap-5 justify-between md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center`}
      >
        <img
          className="md:max-w-[540px] md:min-w-[400px] rounded-[8px] md:flex sm:hidden"
          src={`${import.meta.env.VITE_BASE_URL}${
            product.categoryImage.desktop
          }`}
          alt="SORRY"
        />
        <img
          className="rounded-[8px] hidden md:hidden sm:flex"
          src={`${import.meta.env.VITE_BASE_URL}${
            product.categoryImage.tablet
          }`}
          alt="SORRY"
        />
        <div className="flex flex-col cursor-default sm:gap-4 gap-6 text-center md:text-start">
          {product.new && (
            <p className="text-0002 font-manrope text-[14px] uppercase tracking-[10px]">
              New Product
            </p>
          )}
          <div className="flex flex-col md:gap-10 gap-6 md:items-start font-manrope items-center">
            <div className="flex flex-col sm:gap-8 gap-6 md:max-w-[445px]">
              <h1 className="sm:text-[40px] text-[28px] font-bold sm:leading-11 uppercase sm:tracking-[1.429px] tracking-[1px]">
                {product.name}
              </h1>
              <p className="text-[15px] leading-[25px] opacity-[0.5]">
                {product.description}
              </p>
            </div>
            <Link
              className="bg-0002 text-[13px] cursor-pointer hover:bg-hover-0002 font-bold tracking-[1px] py-[15px] px-[29.5px] uppercase text-white"
              to={`/products/${product.category}/${product.slug}`}
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
