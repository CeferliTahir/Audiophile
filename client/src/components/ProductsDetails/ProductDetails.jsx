const ProductDetails = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="flex cursor-default justify-between flex-col md:flex-row gap-[88px] sm:gap-[120px] md:gap-5">
          <div className="flex flex-col sm:gap-8 gap-6 md:w-[635px] font-manrope">
            <h1 className="sm:text-[32px] text-2xl font-bold sm:tracking-[1.143px] tracking-[0.857px] leading-9">
              FEATURES
            </h1>
            <p className="text-[15px] leading-[25px] opacity-[0.5]">
              {data.features}
            </p>
          </div>
          <div className="flex flex-col sm:gap-8 gap-6 md:w-[350px] font-manrope">
            <h1 className="sm:text-[32px] text-2xl uppercase font-bold sm:tracking-[1.143px] tracking-[0.857px] leading-9">
              in the box
            </h1>
            <ul className="flex flex-col gap-2">
              {data.includes.map(({ quantity, item }) => {
                return (
                  <li className="flex sm:gap-6 gap-[21px] font-manrope">
                    <p className="text-0002 text-[15px] font-bold leading-[25px]">
                      {quantity}x
                    </p>
                    <p className="text-[15px] leading-[25px] opacity-[0.5]">
                      {item}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
