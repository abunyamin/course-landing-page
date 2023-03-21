import React from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { reviews } from '../utils';
import './Review.css'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";

const Review = ({viewportSize}: any) => {
  SwiperCore.use([Navigation]);
  return (
    <section className="review container" id="review">
      <div className="review__head">Reviews</div>
      <div className="review__body">
        <div className="review__nav" data-aos="fade-right">
          <span className="review__nav--text">
          What our <span>Students</span> say about us
          </span>
          <div className="review__nav--button">
            <button className="btn__left">
              <IoChevronBack className='review__button' />
            </button>
            <button className="btn__right">
              <IoChevronForward className='review__button' />
            </button>
          </div>
        </div>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        spaceBetween={viewportSize.width >= 678 ? 32 : 16}
        slidesPerView={2}
        navigation={{
          prevEl: ".btn__left",
          nextEl: ".btn__right",
        }}
        scrollbar={{ draggable: true }}
        className="review__list">
          {reviews.map((review, index) => (
          <SwiperSlide>
          <div className="review__card" key={index}>
            <div className="review__card--head">
              <img src={review.img} alt={review.name} />
              <div className="text">
                <span>{review.name}</span>
                <span>{review.job}</span>
              </div>
            </div>
            <span className="review__card--body">
                {review.text}
              </span>
          </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Review