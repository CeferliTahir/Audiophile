import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ProductOverview from "../components/ProductsDetails/ProductOverview";
import ProductDetails from "../components/ProductsDetails/ProductDetails";
import ProductGallery from "../components/ProductsDetails/ProductGallery";
import RelatedProducts from "../components/ProductsDetails/RelatedProducts";
import CategoryCards from "../components/common/Categories/CategoryCards";
import MissionSection from "../components/common/MissionSection";
import SkeletonPage from "../components/Skeleton/SkeletonPage";

const ProductsDetailsPage = () => {
  const [dataState, setDataState] = useState([]);
  const { name } = useParams();
  const { data, error, loading } = useFetch("/all/products");

  useEffect(() => {
    if (data && name) {
      const filteredProducts = data.filter((product) => product.slug === name);
      setDataState(filteredProducts);
    }
  }, [data, name]);

  const product = dataState[0];

  return (
    <>
      <Toaster />
      {loading ? (
        <SkeletonPage />
      ) : product ? (
        <>
          <ProductOverview data={product} />
          <ProductDetails data={product} />
          <ProductGallery data={product} />
          <RelatedProducts data={product} />
        </>
      ) : error ?(
        toast.error(error)
      )}
      <CategoryCards />
      <MissionSection />
    </>
  );
};

export default ProductsDetailsPage;
