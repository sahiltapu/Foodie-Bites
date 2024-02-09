import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../../styles/FooterStyle.css";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>Near Jod Colony</p>
                <p>Dr, Miami, FL 33126</p>
                <p>Norway</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>
                  <Link to="tel:9998887777" className="calling" style={{textDecoration:"none"}}>
                    999-888-7777
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                    <FaFacebookSquare />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/?lang=en" rel="noopener noreferrer" target="_blank">
                    <FaXTwitter style={{color:"black"}} />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                    <FaInstagram style={{color: "linear-gradient(to right, #833ab4, #fd1d1d, #fd1d1d, #fcb045)", textDecoration:"none"}}/>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                    <FaYoutube style={{color:"red"}}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                  <FaRegCopyright />
                  </li>
                  <li>
                    <Link to="" style={{textDecoration:"none", color:"black"}}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/" style={{textDecoration:"none", color:"black"}}>Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/" style={{textDecoration:"none", color:"black"}}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
