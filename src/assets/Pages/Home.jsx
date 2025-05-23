import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className="my-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/wawa.jpg"
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Welcome to Bright Future Academy</h3>
            <p>Where learning meets excellence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./image/CLASS.jpg"
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Dedicated to Student Success</h3>
            <p>Our students achieve remarkable results</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                To provide a nurturing environment that fosters academic excellence, 
                character development, and lifelong learning.
              </Card.Text>
              <Button variant="primary" href="/about">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Academic Programs</Card.Title>
              <Card.Text>
                Explore our diverse range of programs designed to meet the needs 
                of every student at every level.
              </Card.Text>
              <Button variant="primary" href="/academics">View Programs</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Admissions</Card.Title>
              <Card.Text>
                Ready to join our community? Learn about our admission process 
                and requirements.
              </Card.Text>
              <Button variant="primary" href="/admission">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Latest News & Events</h2>
          <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/event1.jpg" />
              <Card.Body>
                <Card.Title>Annual Science Fair</Card.Title>
                <Card.Text>
                  Join us for our exciting science fair showcasing student projects.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/event2.jpg" />
              <Card.Body>
                <Card.Title>Sports Day</Card.Title>
                <Card.Text>
                  Our annual sports competition is coming up next month.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home