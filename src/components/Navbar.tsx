import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { IoSearch, IoReorderThree, IoClose, IoPersonOutline, IoHomeOutline, IoBookOutline, IoPeopleOutline, IoCalendarOutline,IoChatboxEllipsesOutline} from 'react-icons/io5'

const Navbar = () => {

  const [navMenu, setNavMenu] = useState(false);
  const [navBar, setNavBar] = useState(false)

  const navRef = useRef<any>(null);

  const menuActive = navMenu ? 'menu menu--active' : 'menu';
  const barActive = navBar ? 'right-bar bar--active' : 'right-bar';

useEffect(()=> {
  window.addEventListener("scroll", function() {
    navRef.current?.classList.toggle("fixed", window.scrollY > 200);
  });

  return () => window.removeEventListener("scroll", function() {
    navRef.current?.classList.toggle("fixed", window.scrollY > 200);
  });
})

  return (
    <header className="navbar container" id="navbar" ref={navRef}>
      <div className="btn__menu" onClick={() => setNavMenu(!navMenu)}>
        {navMenu ? <IoClose className='menu__icon'/> : <IoReorderThree className='menu__icon' />}
      </div>
      <div className="logo">
        WiSchool
      </div>
      <div className={menuActive}>
        <ul className="menu-list">
          <li><IoHomeOutline className='menu-list__icon'/>
          <a href="#navbar">Home</a></li>
          <li><IoBookOutline className='menu-list__icon'/><a href="#popular">Courses</a></li>
          <li>
            <IoPeopleOutline className='menu-list__icon'/>
            <a href="#instructor">Instructors</a></li>
          <li>
            <IoCalendarOutline className='menu-list__icon'/>
            <a href="#section-education">Schedules</a></li>
          <li>
            <IoChatboxEllipsesOutline className='menu-list__icon'/>
            <a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="btn__user" onClick={() => setNavBar(!navBar)}>
        
      {navBar ? <IoClose className='person__close'/> : <div className="person__bg"> <IoPersonOutline className='person__icon'/>
        </div>}
      </div>
      <div className={barActive}>
        <div className="search">
          <input type="text" className="input__search" placeholder="search..." />
          <button className='btn__search'><IoSearch className='search__icon' /></button>
        </div>
      <div className="navbar__button">
        <button className="btn__login">Login</button>
        <button className="btn__register">Register</button>
      </div>
      </div>
    </header>
  )
}

export default Navbar