import Container from "react-bootstrap/Container";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <SocialMediaLinks />
        &copy; {new Date().getFullYear()} Resellpur. All rights reserved.
      </Container>
    </footer>
  );
};

export default Footer;
