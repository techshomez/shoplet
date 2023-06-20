import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur libero nulla possimus vel pariatur laudantium earum
            atque, nobis dolorem ut numquam quo, quam ad excepturi? Ab optio
            velit atque quis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            placeat corporis. Natus sapiente eos pariatur quibusdam sit nostrum
            incidunt neque accusantium obcaecati aperiam laudantium aliquid
            consectetur, quaerat quo asperiores iure?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Shoplet</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
