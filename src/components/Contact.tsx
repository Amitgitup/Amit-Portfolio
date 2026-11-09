import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Contact</h3>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:amitksingh3022@gmail.com" data-cursor="disable">
                amitksingh3022@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 95036 22480</p>
            <h4>Location</h4>
            <p>Jamshedpur, India</p>
          </div>

          <div className="contact-box">
            <h4>Education</h4>
            <p>B.Tech · CGPA 7.56/10</p>
            <p className="edu-year">2023 - 2027</p>
            <p className="edu-detail">National Institute of Technology, Jamshedpur</p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <div className="social-links-grid">
              <a href="https://github.com/Amitgitup" target="_blank" data-cursor="disable" className="contact-social">
                Github <MdArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/amit-singh-58101928a/" target="_blank" data-cursor="disable" className="contact-social">
                Linkedin <MdArrowOutward />
              </a>
              <a href="https://leetcode.com/u/as_ml_dev/" target="_blank" data-cursor="disable" className="contact-social">
                LeetCode <MdArrowOutward />
              </a>
              <a href="https://www.kaggle.com/amitsingh95036" target="_blank" data-cursor="disable" className="contact-social">
                Kaggle <MdArrowOutward />
              </a>
              <a href="https://x.com/AmitSingh121507" target="_blank" data-cursor="disable" className="contact-social">
                Twitter / X <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>

        <footer className="footer-area">
          <div className="footer-line"></div>
          <div className="footer-content">
            <p className="footer-copyright">
              Amit Singh's Portfolio <span className="footer-separator">|</span> <MdCopyright /> {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
