import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'

const Admission = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>Admissions</h1>
          <p className="lead">Join our community of learners and achievers.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <h2>Admission Process</h2>
          <p>
            We welcome applications from students who demonstrate academic potential, 
            good character, and a willingness to contribute positively to our 
            school community. Our admission process is designed to ensure the best 
            fit between students and our educational program.
          </p>
          
          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Step 1: Inquiry</Accordion.Header>
              <Accordion.Body>
                <p>
                  Begin by submitting an inquiry form through our website or by 
                  contacting our admissions office. We'll provide you with detailed 
                  information about our programs and schedule a campus tour if desired.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Step 2: Application</Accordion.Header>
              <Accordion.Body>
                <p>
                  Complete and submit the online application form along with the 
                  non-refundable application fee. Required documents include:
                </p>
                <ul>
                  <li>Completed application form</li>
                  <li>Birth certificate</li>
                  <li>Previous school records (if applicable)</li>
                  <li>Health records</li>
                  <li>Two teacher recommendations</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Step 3: Assessment</Accordion.Header>
              <Accordion.Body>
                <p>
                  All applicants are required to complete an age-appropriate 
                  assessment to determine readiness for our program. For elementary 
                  grades, this typically includes basic literacy and numeracy 
                  skills. Middle and high school applicants may need to complete 
                  subject-specific assessments.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Step 4: Family Interview</Accordion.Header>
              <Accordion.Body>
                <p>
                  A meeting with school administrators helps us understand your 
                  child's needs and your family's educational goals. This is also 
                  an opportunity for you to ask questions about our program.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Step 5: Admission Decision</Accordion.Header>
              <Accordion.Body>
                <p>
                  Admission decisions are typically made within two weeks of 
                  completing all requirements. You will receive formal notification 
                  by email and mail.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <h2 className="mt-5">Tuition and Financial Aid</h2>
          <p>
            We believe in making quality education accessible. Our tuition rates 
            are competitive, and we offer several financial aid options for 
            qualifying families.
          </p>
          
          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Tuition Rates 2023-2024</Card.Title>
                  <ul className="list-unstyled">
                    <li>Elementary School: $12,000/year</li>
                    <li>Middle School: $14,000/year</li>
                    <li>High School: $16,000/year</li>
                  </ul>
                  <Card.Text>
                    Payment plans and sibling discounts available.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Financial Aid</Card.Title>
                  <Card.Text>
                    Approximately 30% of our students receive some form of 
                    financial assistance. Awards are based on demonstrated need 
                    and available funding.
                  </Card.Text>
                  <Button variant="primary">Apply for Financial Aid</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        
        <Col md={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <Card.Title>Important Dates</Card.Title>
              <Card.Text>
                <strong>Application Deadlines:</strong>
                <ul>
                  <li>Priority Deadline: January 15</li>
                  <li>Regular Deadline: March 1</li>
                  <li>Rolling Admission: After March 1 (space permitting)</li>
                </ul>
                <strong>Notification Dates:</strong>
                <ul>
                  <li>Priority Applicants: February 15</li>
                  <li>Regular Applicants: April 1</li>
                </ul>
              </Card.Text>
              <Button variant="success" className="w-100">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Admission