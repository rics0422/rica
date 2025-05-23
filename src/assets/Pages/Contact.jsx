import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p className="lead">We'd love to hear from you!</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h2>Get in Touch</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Select>
                <option>Select a subject</option>
                <option>Admission Inquiry</option>
                <option>General Information</option>
                <option>Feedback</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2>Our Location</h2>
          <div className="ratio ratio-16x9 mb-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155732912346!2d-73.9878449242398!3d40.74844097138991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689877225834!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>

          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                <strong>Address:</strong><br />
                123 Education Street<br />
                Learning City, LC 12345<br /><br />
                
                <strong>Phone:</strong> (123) 456-7890<br />
                <strong>Fax:</strong> (123) 456-7891<br />
                <strong>Email:</strong> info@brightfuture.edu<br /><br />
                
                <strong>Office Hours:</strong><br />
                Monday-Friday: 8:00 AM - 4:30 PM<br />
                Saturday: 9:00 AM - 12:00 PM<br />
                Sunday: Closed
              </Card.Text>
            </Card.Body>
          </Card>

          <h3 className="mt-4">Department Contacts</h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Admissions Office</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>Email:</strong> admissions@brightfuture.edu<br />
                  <strong>Phone:</strong> (123) 456-7892
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Registrar's Office</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>Email:</strong> registrar@brightfuture.edu<br />
                  <strong>Phone:</strong> (123) 456-7893
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Student Services</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>Email:</strong> studentservices@brightfuture.edu<br />
                  <strong>Phone:</strong> (123) 456-7894
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact