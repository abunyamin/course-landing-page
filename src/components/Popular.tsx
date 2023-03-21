import React, { useState, useEffect, useCallback } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Card from "./Card";
import { courses } from "../utils";
import "./Popular.css";

const Popular = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [originalCourses, setOriginalCourses] = useState<any>([]);
  const [dataSort, setDataSort] = useState<any>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    setOriginalCourses(courses);
    setDataSort(courses);
  }, []);

  useEffect(() => {
    let sortedCourses = [...originalCourses];
    switch (activeIndex) {
      case 0:
        sortedCourses = sortedCourses.sort((a: any, b: any) => a.title.localeCompare(b.title));
        break;
      case 1:
        sortedCourses = sortedCourses.sort((a: any, b: any) => b.price - a.price);
        break;
      case 2:
        sortedCourses = sortedCourses.sort((a: any, b: any) => b.student - a.student);
        break;
      case 3:
        sortedCourses = sortedCourses.sort((a: any, b: any) => b.rate - a.rate);
        break;
      default:
        sortedCourses = originalCourses;
    }
    setDataSort(sortedCourses);
  }, [activeIndex, originalCourses]);

  const toggleDropdown = (index: number) => {
    setActiveIndex(index);
  };

  const list = ["A-Z", "Price", "Popular", "Rate"];

  return (
    <section className="popular container" id="popular">
      <div className="popular__head">
        <h3>Most Popular courses</h3>
        <button className="sort" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUp className="sort__icon" /> : <IoChevronDown className="sort__icon" />}
          <span>Sort By</span>
        </button>
        {isOpen && (
          <ul className="sort__list">
            {list.map((item, index) => (
              <li className={index === activeIndex ? "active" : ""} onClick={() => toggleDropdown(index)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="popular__list">
        {dataSort.map((cardItem: any, index: number) => (
          <Card cardItem={cardItem} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
