import Categories from "../../components/Categories";
import Contact from "../../components/Contact";
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
      <Contact />
    </div>
  );
};

export default HomePage;
