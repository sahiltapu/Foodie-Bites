import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoBagAdd } from "react-icons/io5";

const Cards = ({
  image,
  rating,
  title,
  paragraph,
  price,
  renderRatingIcons,
}) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i class="bi bi-heart-fill"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0 me-2">
                {/* <FaIndianRupeeSign /> */}
                <i class="bi bi-currency-rupee"></i>
                {price}
              </h5>
            </div>
            <div className="add_to_card">
              <Link to="/">
                <IoBagAdd />
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
