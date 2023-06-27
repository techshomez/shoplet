import { useState } from "react";
import "./product.scss";
import { FaCartPlus, FaRegHeart, FaBalanceScale } from "react-icons/fa";

const ProductPage = () => {
  const [selectedImg, setSeletedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrbg&w=1600&lazy=load",
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSeletedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSeletedImg(1)} />
        </div>
        <div className="main__img">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
          nesciunt ab exercitationem animi dolores illo sapiente provident
          magnam vero obcaecati atque, itaque nihil soluta delectus doloremque
          incidunt quaerat natus.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <FaCartPlus /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FaRegHeart /> ADD TO WISH LIST
          </div>
          <div className="item">
            <FaBalanceScale /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
