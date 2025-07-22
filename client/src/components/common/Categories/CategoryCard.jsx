import { Link } from "react-router-dom";

const CategoryCard = ({ product, image }) => {
  return (
    <>
      <div className="md:w-[350px] sm:w-[223px] w-full md:h-[204px] h-[165px] bg-0003 rounded-[8px] relative flex justify-center items-center flex-col md:pt-[90px] sm:pt-[60px] pt-[75px]">
        <img
          className={`absolute md:w-[220px] sm:w-[150px] w-[160px] ${
            product === "earphones"
              ? "md:top-[-55px] sm:top-[-40px] top-[-45px]"
              : product === "speakers"
              ? "md:top-[-70px] sm:top-[-45px] top-[-50px]"
              : "md:top-[-80px]  top-[-55px]"
          }`}
          src={image}
          alt="SORRY"
        />
        <div className="flex flex-col items-center gap-1.5">
          <h1 className="font-manrope uppercase text-[18px] cursor-default font-bold tracking-[1.286px]">
            {product}
          </h1>
          <Link
            className="flex items-center cursor-pointer hover:text-0002 gap-3 font-manrope text-[13px] font-bold tracking-[1px] opacity-[0.5]"
            to={`/products/${product}`}
          >
            Shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.3219 1L6.3219 6L1.3219 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
