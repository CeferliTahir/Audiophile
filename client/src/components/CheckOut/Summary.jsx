import { useSelector } from "react-redux";
const Summary = () => {
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <>
      <div className="py-8 flex flex-col gap-8 bg-white rounded-[8px] w-[350px] px-[33px]">
        <h1 className="text-[18px] font-manrope font-bold tracking-[ 1.286px] uppercase">
          summary
        </h1>
        <div className="flex flex-col gap-6">1</div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <ul className="font-manrope">
              <li className="flex items-center justify-between ">
                <h1 className="text-[15px] leading-[25px] opacity-[0.5]">
                  TOTAL
                </h1>
                <p className="font-bold text-[18px]">$ 5,396</p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[15px] leading-[25px] opacity-[0.5]">
                  SHIPPING
                </h1>
                <p className="font-bold text-[18px]">$ 5,396</p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[15px] leading-[25px] opacity-[0.5]">
                  VAT (INCLUDED)
                </h1>
                <p className="font-bold text-[18px]">$ 5,396</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-[15px] leading-[25px] opacity-[0.5]">
              GRAND TOTAL
            </h1>
            <p className="font-bold text-[18px] text-0002">$ 5,446</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
