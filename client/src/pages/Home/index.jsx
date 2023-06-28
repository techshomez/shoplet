import Categories from "../../components/Categories";
import Contact from "../../components/Contact";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import PageTitle from "../../components/reuse/PageTitle";
import "./home.css";
const HomePage = () => {
  return (
    <>
      <PageTitle title="Shoplet" name="Home" />
      <div>
        <Slider />
        <FeaturedProducts type="featured" />
        <Categories />
        <FeaturedProducts type="trending" />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
