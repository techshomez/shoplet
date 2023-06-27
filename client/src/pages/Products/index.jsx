import "./products.scss";

const ProductsPage = () => {
  return (
    <div className="products">
      <div className="lef">
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
            <input type="range" min={0} max={100} id="" />
            <span>1000</span>
          </div>
        </div>
        <div className="filter__item">
          <h2>Sort by</h2>
          <div className="input__item">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Lowest Price</label>
          </div>
          <div className="input__item">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor="desc">Highest Price</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default ProductsPage;
