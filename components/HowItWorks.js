import { Container, Row, Col } from "react-bootstrap";

const HowItWorks = () => {
  const howItWorksData = [
    // Static data for How It Works section
    {
      step: 1,
      title: "Create an Account",
      description: "Sign up for a free account to get started.",
    },
    {
      step: 2,
      title: "List Your Item",
      description:
        "Upload clear photos and a detailed description of your item.",
    },
    {
      step: 3,
      title: "Connect with Buyers",
      description: "Respond to inquiries and negotiate with potential buyers.",
    },
    {
      step: 4,
      title: "Complete the Sale",
      description: "Agree on a price, arrange payment, and ship the item.",
    },
  ];
  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="why-choose-title">How It Works</h2>
        </div>
        <Row>
          {howItWorksData.map((step, index) => (
            <Col key={index} md={3} className="mb-4">
              <div className="text-center">
                <div className="step-circle mb-3">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
