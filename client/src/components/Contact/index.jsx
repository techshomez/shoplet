import "./contact.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>GET IN TOUCH</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email" />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaPinterestP />
        </div>
      </div>
    </div>
  );
};

export default Contact;
