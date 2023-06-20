import "./navbar.scss";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <FiChevronDown />
          </div>
          <div className="item">
            <span>USD</span>
            <FiChevronDown />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">Shoplet</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <FiSearch />
            <FiUser />
            <FiHeart />
            <div className="cart__icon">
              <FiShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
