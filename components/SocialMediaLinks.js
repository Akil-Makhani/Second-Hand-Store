// components/SocialMediaLinks.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
