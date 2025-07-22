import RelatedCard from "./RelatedCard";

const RelatedProducts = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col md:gap-16 sm:gap-14 gap-10 w-full">
          <h1 className="font-manrope cursor-default sm:text-[32px] text-2xl font-bold leading-9 uppercase sm:tracking-[1.143px] tracking-[0.857px] text-center">
            you may also like
          </h1>
          <div className="flex items-center justify-between flex-col sm:flex-row md:gap-5 sm:gap-[11px] gap-14">
            {data?.others.map(({ image, name, slug, category }) => {
              return (
                <RelatedCard
                  image={image}
                  name={name}
                  slug={slug}
                  category={category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
