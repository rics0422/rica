import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>About</h1>
          <p className="lead">Established in 1995, we've been shaping young minds for over 25 years.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <h2>Our History</h2>
          <p>
           Davao Central College, Inc. (DCCI) like many other institutions has had its share of successes and defeats. It opened its doors in 1948 when the war had just ended. It was then called Davao Central Institute (DCI), the first high school established in Toril “with no more than 76 enrollees” from First Year to Fourth Year during its opening.

Mr. Salustiano Advincula, a dynamic Christian leader whose vision and passion for the education of the youth was inspired by the worldwide “Each one, teach one” program of Dr. Frank C. Laubach, set the mode of school life in DCI. Mr. Advincula thought of the economically challenged when he began this mission with a group of friends. He used to lament, “It is very difficult for a poor man’s son to get an education!” Thus, educating the youth became a passion for him as he was also a product of someone’s benevolence — when as a teenager he worked for Dr.Laubach, a Christian missionary in Lanao..
          </p>
          <p>
            
          </p>
        </Col>
        <Col md={6}>
          <Image src="/old-school.jpg" fluid rounded className="mb-3" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="order-md-2">
          <h2>Our Vision</h2>
          <p>
            A leading institution of higher learning known for its commitment to quality education, strong research culture, and community development.
Developing the intellectual, artistic, scientific, and technological minds of students. 
          </p>
          
          <h2 className="mt-4">Our Mission</h2>
          <p>
            To provide holistic, quality education that prepares individuals for a fulfilling life and contributes to the overall development of society.
To produce committed professionals who are well-equipped to serve the needs of the community and the nation. 
          </p>
        </Col>
        <Col md={6} className="order-md-1">
          <Image src="/students-learning.jpg" fluid rounded />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Our Core Values</h2>
          <ul className="list-unstyled row">
            <li className="col-md-4 mb-3">
              <h4>Excellence</h4>
              <p>Striving for the highest standards in all we do</p>
            </li>
            <li className="col-md-4 mb-3">
              <h4>Integrity</h4>
              <p>Being honest, ethical, and consistent in our actions</p>
            </li>
            <li className="col-md-4 mb-3">
              <h4>Respect</h4>
              <p>Valuing diversity and treating all with dignity</p>
            </li>
            <li className="col-md-4 mb-3">
              <h4>Innovation</h4>
              <p>Embracing creativity and continuous improvement</p>
            </li>
            <li className="col-md-4 mb-3">
              <h4>Community</h4>
              <p>Building strong relationships and serving others</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default About