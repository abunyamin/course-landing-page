import React, { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import category from "../assets/category-1.svg";
import category2 from "../assets/category-2.webp";
import category3 from "../assets/category-3.webp";
import category4 from "../assets/category-4.webp";
import category5 from "../assets/category-5.webp";
import category6 from "../assets/category-6.webp";
import category7 from "../assets/category-7.webp";
import category8 from "../assets/category-8.webp";

import "./Category.css";

const Category = ({ viewportSize }: any) => {
  SwiperCore.use([Navigation, Autoplay]);

  const categories = [
    { title: "Marketing", img: category },
    { title: "Design", img: category2 },
    { title: "Programming", img: category3 },
    { title: "Technology", img: category4 },
    { title: "Data Science", img: category5 },
    { title: "Mechine Learning", img: category6 },
    { title: "Fullstack Developer", img: category7 },
    { title: "Frontend", img: category8 },
  ];

  return (
    <section className="category container" id="category">
      <div className="category__head">
        <h3>Choose favourite course from top cartegories</h3>
        <span className="see-all">
          <a href="#">See all</a>
        </span>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={3000}
        spaceBetween={viewportSize.width >= 678 ? 32 : 16}
        slidesPerView={viewportSize.width >= 1024 ? 4 : 3}
        navigation={{
          prevEl: ".btn__left",
          nextEl: ".btn__right",
        }}
        scrollbar={{ draggable: true }}
        className="category__list"
      >
        {categories.map((category, index) => (
          <SwiperSlide>
            <div className="category__image" key={index}>
              <img src={category.img} alt={category.title} />
              <span>{category.title}</span>
            </div>
          </SwiperSlide>
        ))}
        <div className="category__buttons">
          <button className="btn__left">
            <IoChevronBack className="category__button" />
          </button>
          <button className="btn__right">
            <IoChevronForward className="category__button" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Category;
