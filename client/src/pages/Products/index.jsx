import { useParams } from "react-router-dom";
import List from "../../components/List";
import "./products.scss";
import PageTitle from "../../components/reuse/PageTitle";
import { useState } from "react";

const ProductsPage = () => {
  const cat_id = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <>
      <PageTitle title="Shoplet" name="Category Page" />
      <div className="products">
        <div className="left">
          <div className="filter__item">
            <h2>Product Categories</h2>
            <div className="input__item">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="input__item">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">Skirts</label>
            </div>
            <div className="input__item">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">Coats</label>
            </div>
          </div>
          <div className="filter__item">
            <h2>Filter by price</h2>
            <div className="input__item">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filter__item">
            <h2>Sort by</h2>
            <div className="input__item">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Lowest Price</label>
            </div>
            <div className="input__item">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Highest Price</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            className="cat__img"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <List cat_id={cat_id} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
