import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { courses } from "../utils";
import Card from "./Card";
import "./Skill.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Skill = ({ viewportSize }: any) => {
  SwiperCore.use([Navigation]);

  return (
    <section className="skill container" id="skill">
      <div className="skill__head">
        <h3>Learn a new skill in two hours</h3>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={3000}
        spaceBetween={32}
        slidesPerView={viewportSize.width >= 768 ? 3 : 2}
        navigation={{
          prevEl: ".btn__left",
          nextEl: ".btn__right",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="category__list2"
      >
        {courses.map((skill, index) => (
          <SwiperSlide>
            <Card cardItem={skill} key={index} />
          </SwiperSlide>
        ))}
        <div className="skill__buttons">
          <button className="btn__left">
            <IoChevronBack className="skill__button" />
          </button>
          <button className="btn__right">
            <IoChevronForward className="skill__button" />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Skill;
