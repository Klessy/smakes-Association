import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import Logo from "../assets/icons/icon-1.png"
import { navlinks  } from '../data';
import './navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);

  // sticky navbar
  const handleScroll = () => {
    if(window.scrollY > 300) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
   <nav>
      {/* Topbar Start */}
      <div className='topbar__container'>
        <div className="flex__container-topbar">
          <div className="item_one">
            <div className="left">
              <a className='text-body' href="tel: +2348053929587">
                <i className="fa fa-phone-alt text-primary me-2"></i>
                +234 80 539 295 87
              </a>
              <a className='text-body' href="mailto:info@example.com">
                <i className="fa fa-envelope-open text-primary me-2"></i>
                info@example.com
              </a>
            </div>
          </div>
          <div className="text-end">
            <div class="terms_con .me-2">
              <a className='text-body' href="">Terms</a>
              <a  href="" className='text-body'>Privacy</a>
            </div>
            <div class="social_handles">
              <a className = "btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-facebook-f"></i></a>
              <a className = "btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-twitter"></i></a>
                <a className = "btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className = "btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
          </div>
        </div>
      </div>
       {/* Topbar End */}


    <div className={`nav__container ${sticky ? "sticky-top_remove" : ""}`}>
      <div className="navbar__img">
        <Link to="/" className='nav__logo'  onClick={() => window.scrollTo(0,0)}>
          <img src={Logo} alt="Building_and_planing-logo" />
          <h1 className='font__logo'>SOMAKES ASSOCIATES</h1>
        </Link>
      </div>
      <ul className='navbar__links'>
        {
          navlinks.map((links) => {
            const {id, title, path} = links;
            return(
              <li key={id}>
                <NavLink to={path} className = 'font__main'>
                  {title}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <div className="mobile-screen">
        <GoThreeBars 
        style={{ color: "var(--primary)", fontSize: "3.5rem"}}
        onClick = {() => setToggle(true)}/>
        { toggle && (
          <div className="mobile-menu">
            <MdOutlineClose
             style={{ color: "var(--primary)", fontSize: "3.5rem"}} 
            onClick={() => setToggle(false)}
            />
            <ul className="navbar__links-mobile">
              {
                 navlinks.map((links) => {
                  const {id, title, path} = links;
                  return(
                    <li key={id}>
                      <NavLink to={path}>
                        {title}
                      </NavLink>
                    </li>
                  )
                })
              }
              
            </ul>
          </div>
        )}
      </div>
    </div>
   </nav>
  )
}

export default Navbar