import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListCard from "./ListCard";

const Lists = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const fetch = useFetch("/all/products");

  useEffect(() => {
    if (fetch.data && category) {
      const filteredProducts = fetch.data.filter(
        (product) => product.category === category
      );
      setData(filteredProducts);
    }
  }, [fetch.data, category]);

  const sortedProducts = [...data].sort((a, b) => b.new - a.new);

  return (
    <>
      <div className="container">
        <div className="flex flex-col md:gap-40 gap-[120px] md:pt-[160px] sm:pt-[120px] pt-16">
          {sortedProducts?.map((product, index) => {
            return (
              <ListCard
                key={product.id}
                product={product}
                reverse={index % 2 !== 0}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lists;
