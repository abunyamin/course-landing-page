import React from "react";
import ImageBanner from "../assets/bottom-banner.webp";
import ImageBottom from "../assets/bottom.webp";
import "./SectionBottom.css";

const SectionBottom = () => {
  const styles = {
    backgroundImage: `url(${ImageBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
    Position: 'relative', 
  };

  return (
    <section className="section-bottom" style={styles} id="section-bottom">
      <div className="row-1">
        <img src={ImageBottom} alt="Image Bottom" />
      </div>
      <div className="row-2">
        <h3 className="title">You don’t have to see the whole staircase just take the first step</h3>
        <span className="sub-title">Amet in a suspendisse convallis eget, Amet in a suspendisse convallis egetAmet in a</span>
        <div className="button__bottom">
          <button className="btn__left">Get Started</button>
          <button className="btn__right">Place Call</button>
        </div>
      </div>
    </section>
  );
};

export default SectionBottom;
