import headphones from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import CategoryCard from "./CategoryCard";

const CategoryCards = () => {
  return (
    <>
      <div className="container">
        <div className="flex sm:flex-row gap-[68px] md:gap-5 sm:gap-2.5 flex-col items-center justify-between sm:pt-[240px] pt-[172px]">
          <CategoryCard product="headphones" image={headphones} />
          <CategoryCard product="speakers" image={speakers} />
          <CategoryCard product="earphones" image={earphones} />
        </div>
      </div>
    </>
  );
};

export default CategoryCards;
