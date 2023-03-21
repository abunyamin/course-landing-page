import React, { useState } from "react";
import { footer } from "../utils";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import "./Footer.css";

const Footer = ({ viewportSize }: any) => {

  const [footers,] = useState(viewportSize.width >= 678 ? footer : footer.slice(0, 3))

  return (
    <>
      <footer className="section-footer" id="footer">
        <div className="footer">
          <div className="footer__text">
            <h1 className="title">WiSchool</h1>
            <div className="subtitle">We are not here to sell you products, we sell value through our expertise.</div>
            <div className="social__list">
              <IoLogoFacebook className="social__icon" />
              <IoLogoTwitter className="social__icon" />
              <IoLogoInstagram className="social__icon" />
              <IoLogoLinkedin className="social__icon" />
            </div>
          </div>
          <div className="footer__list">
            {footers.map((list, index) => (
              <ul className="list__main" key={index}>
                {list.map((item, count) => (
                  <li key={count}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Bottom />
      </footer>
    </>
  );
};

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="bottom__title">Subscribe to get latest updates</div>
      <div className="bottom__form">
        <input type="text" className="bottom__input" placeholder="Your Email Address" autoComplete="true" />
        <button type="submit" className="bottom__submit">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Footer;
