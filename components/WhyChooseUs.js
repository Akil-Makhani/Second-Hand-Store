// components/WhyChooseUs.js
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faThLarge,
  faTruck,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const advantagesData = [
    // Static data for advantages
    {
      title: "Secure Transactions",
      description:
        "We ensure secure and protected transactions for all buyers and sellers.",
      icon: faLock,
    },
    {
      title: "Wide Range of Categories",
      description:
        "Browse through diverse categories to find the perfect pre-loved item.",
      icon: faThLarge,
    },
    {
      title: "Convenient Delivery",
      description:
        "Enjoy hassle-free delivery to your doorstep for every purchase.",
      icon: faTruck,
    },
  ];
  return (
    <section className="py-5 bg-light why-choose-us">
      <Container>
        <div className="text-center mb-4">
          <div className="circle-icon">
            <FontAwesomeIcon icon={faCartShopping} className="fa-3x" />
          </div>
          <h2 className="why-choose-title">Why Choose Us?</h2>
        </div>
        <Row>
          {advantagesData.map((advantage, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="text-center">
                <FontAwesomeIcon icon={advantage.icon} className="fa-3x mb-3" />
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
