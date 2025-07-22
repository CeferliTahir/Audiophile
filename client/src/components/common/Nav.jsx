import { Link } from "react-router-dom";

const categories = ["home", "headphones", "speakers", "earphones"];

const Nav = () => {
  return (
    <ul className="flex items-center sm:flex-row flex-col sm:gap-[34px] gap-4 text-white font-manrope text-[13px] font-bold leading-[25px] tracking-[2px]">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <Link
              className="hover:text-0002 uppercase"
              to={category === "home" ? "/" : `/products/${category}`}
            >
              {category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
