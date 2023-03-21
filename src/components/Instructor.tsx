import React from "react";
import "./Instructor.css";
import { instructors } from "../utils";

const Instructor = () => {
  return (
    <section className="instructor container" id="instructor">
      <div className="instructor__head">Meet our instructors</div>
      <div className="instructor__list">
        {instructors.map((instructor, index) => (
          <div className="instructor__card" key={index}>
            <img src={instructor.img} alt={instructor.name} />
            <div className="instructor__name">{instructor.name}</div>
            <div className="instructor__position">{instructor.jobPosition}</div>
            <div className="instructor__text">"{instructor.text}"</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
