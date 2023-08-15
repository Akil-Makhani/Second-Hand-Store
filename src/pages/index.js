import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BannerCarousel from "../../components/BannerCarousel";
import HeroSection from "../../components/HeroSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import HowItWorks from "../../components/HowItWorks";
import FeaturedProducts from "../../components/FeaturedProducts";

const Home = () => (
  <div>
    <Header />
    <BannerCarousel />
    <HeroSection />
    <WhyChooseUs />
    <HowItWorks />
    <FeaturedProducts />
    <Footer />
  </div>
);

export default Home;
