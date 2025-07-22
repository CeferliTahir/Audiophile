import ProductHighlightFirst from "./ProductHighlightFirst";
import ProductHighlightSecond from "./ProductHighlightSecond";
import ProductHighlightThird from "./ProductHighlightThird";

const HomeFeaturedProducts = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-12 pt-[160px]">
          <ProductHighlightFirst />
          <ProductHighlightSecond />
          <ProductHighlightThird />
        </div>
      </div>
    </>
  );
};

export default HomeFeaturedProducts;
