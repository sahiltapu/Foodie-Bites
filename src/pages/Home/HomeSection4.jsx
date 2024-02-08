import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

const HomeSection4 = () => {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img
                src={PromotionImage}
                className="img-fluid"
                alt="promotion_image"
              />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Savor the ultimate delight with our mouthwatering burger - a
                symphony of premium ingredients and bold flavors, now on
                promotion for an irresistible taste adventure!
              </p>
              <ul>
                <li>
                  <p>
                    Indulge in a burger bonanza with our limited-time promotion,
                    featuring the juiciest patties grilled to perfection.
                  </p>
                </li>
                <li>
                  <p>
                    Elevate your taste buds with a medley of fresh toppings and
                    savory sauces, creating a culinary masterpiece in every
                    bite.
                  </p>
                </li>
                <li>
                  <p>
                    Hurry, embrace the burger bliss, and treat yourself to a
                    gastronomic experience that's not just a meal but a
                    celebration of flavor!
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* BG parallax Scroll */}
      <section className="bg_parallax_scroll">

      </section>




    </>
  );
};

export default HomeSection4;
