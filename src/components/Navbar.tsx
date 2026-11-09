import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        setIsMenuOpen(false);
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <div className="navbar-left">
          <a href="/#" className="navbar-logo" data-cursor="disable">
            AS.
          </a>
          <a
            href="mailto:amitksingh3022@gmail.com"
            className="navbar-connect"
            data-cursor="disable"
          >
            amitksingh3022@gmail.com
          </a>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <MdMenu />
        </button>

        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <button
            className="menu-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <MdClose />
          </button>
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#career" href="#career">
                <HoverLinks text="CAREER" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#certifications" href="#certifications">
                <HoverLinks text="CERTIFICATIONS" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
