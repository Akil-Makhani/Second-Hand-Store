import Button from "react-bootstrap/Button";
const HeroSection = () => {
  return (
    <section fluid className="text-center">
      <div className="hero-section text-center">
        <div className="hero-content">
          <h1>
            Find Your Treasures, <br />
            Sell Your Stories
          </h1>
          <p>We Give Here A Second Home to great stuff.</p>
          <Button variant="primary" size="lg">
            Start Exploring
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
