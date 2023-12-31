import "./cart.scss";
import { FaTimes } from "react-icons/fa";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    desc: "Long Sleeve Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

const Cart = () => {
  // ScrollReveal().reveal(".cart");
  return (
    <div className="cart">
      <h1>Cart Lists</h1>
      {data?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <FaTimes className="delete" />
          </div>
        );
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Empty Cart</span>
    </div>
  );
};

export default Cart;
