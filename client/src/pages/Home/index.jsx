import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import "./home.css";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default HomePage;
