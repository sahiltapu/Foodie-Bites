import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

const Section6 = () => {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User1" />
                </div>
                <p>
                  This burger is a taste sensation - a symphony of flavors that
                  left my taste buds dancing with delight
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>By Edward Marky</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User2" />
                </div>
                <p>
                  Mouthwateringly delicious, the perfect blend of succulent meat
                  and gourmet toppings make this burger an absolute standout
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>By Amelie Newlove</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User3" />
                </div>
                <p>
                  A burger masterpiece! Every bite is a journey through savory
                  bliss and culinary excellence
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>By Tom Ford</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User4} className="img-fluid" alt="User4" />
                </div>
                <p>
                  Juicy, flavorful, and utterly satisfying – this burger is a
                  true culinary gem that leaves you craving for more.
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>By Elza Bony</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Section6;
