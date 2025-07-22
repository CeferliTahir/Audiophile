const HeaderList = ({ name }) => {
  return (
    <>
      <div className="bg-0001 md:py-[98px] sm:py-[105px] py-8 flex justify-center items-center">
        <h1 className="text-white font-manrope uppercase sm:text-[40px] text-[28px] font-bold sm:leading-11 sm:tracking-[1.429px] tracking-[2px] cursor-default">
          {name}
        </h1>
      </div>
    </>
  );
};

export default HeaderList;
