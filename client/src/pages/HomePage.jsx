import HeroSection from "../components/HomePage/HeroSection";
import CategoryCards from "../components/common/Categories/CategoryCards";
import HomeFeaturedProducts from "../components/HomePage/FeaturedProducts/HomeFeaturedProducts";
import MissionSection from "../components/common/MissionSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <HomeFeaturedProducts />
      <MissionSection />
    </>
  );
};

export default HomePage;
