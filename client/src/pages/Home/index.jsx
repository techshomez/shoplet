import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import "./home.css";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default HomePage;
