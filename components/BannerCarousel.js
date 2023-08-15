/* eslint-disable @next/next/no-img-element */
import Carousel from "react-bootstrap/Carousel";

const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      imageUrl: "/Banner1.jpg",
      title: "Banner 1 Title",
      description: "Banner 1 Description",
    },
    {
      id: 2,
      imageUrl: "/Banner2.jpg",
      title: "Banner 2 Title",
      description: "Banner 2 Description",
    },
    {
      id: 3,
      imageUrl: "/Banner3.jpg",
      title: "Banner 3 Title",
      description: "Banner 3 Description",
    },
  ];
  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <div className="carousel-image-container">
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="carousel-image"
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
