import { useParams, Navigate } from "react-router-dom";
import HeaderList from "../components/ProductsList/HeaderList";
import Lists from "../components/ProductsList/Lists";
import CategoryCards from "../components/common/Categories/CategoryCards";
import MissionSection from "../components/common/MissionSection";

const allowedCategories = ["earphones", "headphones", "speakers"];

const ProductsListPage = () => {
  const { category } = useParams();

  if (!allowedCategories.includes(category)) {
    return <Navigate to="/not-found" />;
  }
  return (
    <>
      <HeaderList name={category} />
      <Lists />
      <CategoryCards />
      <MissionSection />
    </>
  );
};

export default ProductsListPage;
