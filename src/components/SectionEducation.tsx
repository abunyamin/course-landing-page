import React from "react";
import "./SectionEducation.css";
import { IoBookOutline, IoTimerOutline, IoBriefcaseOutline, IoPeopleOutline } from "react-icons/io5";
import education from "../assets/education.webp";

const SectionEducation = () => {
  const list = [
    { title: "Free E-book, Videos and kits", icon: <IoBookOutline className="education__icon" /> },
    { title: "Learn at your own pace", icon: <IoTimerOutline className="education__icon" /> },
    { title: "Collaborate with different learners", icon: <IoBriefcaseOutline className="education__icon" /> },
    { title: "Top instructors around the globe", icon: <IoPeopleOutline className="education__icon" /> },
  ];

  const listEdu = document.querySelectorAll('.section-education__list li');

  Array.from(listEdu).forEach((event: any, index: number)=> {
event.dataset.AosDuration = 400 + (100 * index);
  })

  return (
    <section className="section-education container" id="section-education">
      <div className="section-education__head">
        <h3>We Bring The Good Education To Life</h3>
      </div>
      <div className="section-education__body">
        <div className="row-1">
          <div className="left__image">
            <img src={education} alt="Education Image" data-aos="fade-right" />
            <div className="job">
              <div className="job__icon--bg">
                <IoBriefcaseOutline className="job__icon--item" />
              </div>
              <span className="job__text--1">JOB</span>
              <span className="job__text--2">Opportunities</span>
            </div>
          </div>
        </div>
        <div className="row-2">
          <h3 className="section-education__title" data-aos="fade-right">Let Your Education Do The Walking</h3>
          <ul className="section-education__list">
            {list.map((item, index) => (
              <li  data-aos="fade-right" key={index}>
                <div className="education__bg">{item.icon}</div> <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionEducation;
