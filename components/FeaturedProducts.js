import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src="/Product-Image.png" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.condition}
                  </Card.Subtitle>
                  <Card.Text>Price: ${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
