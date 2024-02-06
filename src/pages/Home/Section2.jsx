import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Carefully selected, premium-quality ingredients harmonize to create the authentic and unforgettable flavors of the original recipe`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Exemplifying excellence, our product stands as a testament to uncompromising quality, precision craftsmanship, and unwavering commitment to customer satisfaction`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Experience the thrill of the fastest delivery, where your desires are just a click away, racing to your doorstep with unprecedented speed and precision`,
  },
];

const Section2 = () => {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tates better when you eat it with family</h2>
              <p>
                Savoring a delicious burger with the warmth of family, each bite
                becomes a shared moment of joy and connection around the dinner
                table.
              </p>
              <Link to="/" className="order_now_button btn_red button">
                Explore Now
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justified-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
