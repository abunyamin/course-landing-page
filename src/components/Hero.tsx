import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { IoPersonOutline, IoChatboxEllipsesOutline, IoPeopleOutline, IoBookOutline, IoHandLeftOutline} from 'react-icons/io5'
import heroImage from "../assets/hero.webp";
import profile1 from "../assets/profile-1.webp";
import profile2 from "../assets/profile-2.webp";
import profile3 from "../assets/profile-3.webp";
import profile4 from "../assets/profile-4.webp";
import profile5 from "../assets/profile-5.webp";
import profile6 from "../assets/profile-6.webp";

const Hero = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    
    const profileClass = document.querySelectorAll('.hero__profile')
    Array.from(profileClass).forEach((item: any, index: number) => {

      item.style.transform = `translate(${-20 * index}px)`
    })
  }, []);

  const profiles = [profile1, profile2, profile3, profile4, profile5, profile6];

  return (<>
    <section className="hero container" id="hero">
      <div className="hero__inside"></div>
      <div className="row-1">
        <div className="hero__text">
          Quality <span>Education</span> By Any Means Necessary.
        </div>
        <div className="btn__hero">Get Started</div>
      </div>
      <div className="row-2">
        <div className="hero__images">
        <div className="hero__card-1">
          <span>
            Learn from best <span>instructors</span> around the globe
          </span>
          <div className="hero__profiles">
            {profiles.map((image, index) => (
              <img src={image} key={index} className="hero__profile" ref={profileRef} />
            ))}
          </div>
        </div>
          <img src={heroImage} alt="Hero Image" className="hero__image" data-aos="fade-left"  data-aos-duration="1000"/>
          <div className="hero__card-2">
          <div className="user">
            <IoPersonOutline className="user__icon" />
          </div>
          <div className="count">15k</div>
          <div className="text">Amazing students around the globe</div>
        </div>
        </div>
      </div>
    </section>
    <ListOffer />
    </>
  );
};


const ListOffer = () => {

  const listOffers = [
    {title: 'Problem Solving', icon: <IoPersonOutline className="offer__icon"/> },
    {title: 'Live Chat', icon: <IoChatboxEllipsesOutline className="offer__icon"/>},
    {title: 'Group Reading', icon: <IoPeopleOutline className="offer__icon"/>},
    {title: '10k Courses', icon: <IoBookOutline className="offer__icon"/> },
    {title: 'Head-on Activities', icon: <IoHandLeftOutline className="offer__icon"/>}
  ]

  return(
    <div className="list__offer container">
      {listOffers.map((offer, index) => (
      <div className="offer__card" key={index}>
        <div className="offer__icons">
          {offer.icon}
        </div>
        <span>{offer.title}</span>
      </div>
      ))}
    </div>
  )
}

export default Hero;
