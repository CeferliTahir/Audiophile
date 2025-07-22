import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToBasket } from "../../store/reducer/basketSlice";

const ProductOverview = ({ data }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToBasket = () => {
    dispatch(
      addToBasket({
        id: data._id,
        name: data.name,
        price: data.price,
        image: data.image.mobile,
        count,
      })
    );
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-col md:gap-14 gap-6 sm:pt-[79px] pt-[33px] sm:pb-[160px] pb-[88px]">
          <div>
            <button className="font-manrope hover:text-0002 cursor-pointer text-[15px] leading-[25px] opacity-[0.5]">
              Go Back
            </button>
          </div>
          <div className="flex items-center sm:flex-row md:gap-5 sm:gap-[40px] gap-10 flex-col justify-between">
            <div>
              <img
                className="w-[540px] rounded-[8px] md:flex hidden object-cover"
                src={`${import.meta.env.VITE_BASE_URL}${data.image.desktop}`}
                alt="SORRY"
              />
              <img
                className="rounded-[8px] sm:hidden flex"
                src={`${import.meta.env.VITE_BASE_URL}${data.image.mobile}`}
                alt="SORRY"
              />
              <img
                className="rounded-[8px] w-[1000px] h-[480px] md:hidden sm:flex hidden object-cover"
                src={`${import.meta.env.VITE_BASE_URL}${data.image.tablet}`}
                alt="SORRY"
              />
            </div>
            <div className="flex flex-col cursor-default md:gap-4 sm:gap-[17px] gap-6">
              {data.new && (
                <p className="text-0002 font-manrope text-[14px] sm:text-[12px] md:text-[14px] uppercase tracking-[10px] md:tracking-[10px] sm:tracking-[8.571px]">
                  New Product
                </p>
              )}
              <div className="flex flex-col md:gap-10 sm:gap-[31px] gap-[31px] items-start font-manrope">
                <div className="flex flex-col sm:gap-8 gap-6 md:max-w-[445px]">
                  <h1 className="md:text-[40px] text-[28px] font-bold md:leading-11 uppercase md:tracking-[1.429px] tracking-[1px]">
                    {data.name}
                  </h1>
                  <p className="text-[15px] leading-[25px] opacity-[0.5]">
                    {data.description}
                  </p>
                  <p className="text-[18px] font-bold uppercase tracking-[1.286px]">
                    $ {data.price}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-0003 flex items-center gap-[25px] font-manrope w-[130px] h-[49.5px] justify-center">
                    <button
                      onClick={dec}
                      className="cursor-pointer hover:text-0002 opacity-[0.25] font-bold"
                    >
                      -
                    </button>
                    <p className="font-manrope text-[13px] font-bold cursor-default">
                      {count}
                    </p>
                    <button
                      onClick={inc}
                      className="cursor-pointer hover:text-0002 opacity-[0.25] font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToBasket}
                    className="bg-0002 text-[13px] cursor-pointer hover:bg-hover-0002 font-bold tracking-[1px] py-[15px] px-[29.5px] uppercase text-white"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
