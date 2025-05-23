import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'

const Academics = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>Academic Programs</h1>
          <p className="lead">Explore our comprehensive curriculum designed to challenge and inspire students.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Tabs defaultActiveKey="elementary" id="academic-tabs" className="mb-3">
            <Tab eventKey="elementary" title="Elementary School">
              <h3 className="mt-3">Elementary School (Grades 1-5)</h3>
              <p>
                Our elementary program provides a strong foundation in core subjects 
                while encouraging curiosity and creativity. We focus on developing 
                fundamental skills in:
              </p>
              <ul>
                <li>Language Arts (Reading, Writing, Communication)</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art and Music</li>
                <li>Physical Education</li>
              </ul>
              <p>
                Our approach emphasizes hands-on learning and project-based activities 
                to make learning engaging and meaningful.
              </p>
            </Tab>
            
            <Tab eventKey="middle" title="Middle School">
              <h3 className="mt-3">Middle School (Grades 6-8)</h3>
              <p>
                The middle school years are a time of significant growth and change. 
                Our program is designed to support students through this transitional 
                period with:
              </p>
              <ul>
                <li>Core academic subjects with departmentalized instruction</li>
                <li>Exploratory courses in technology, arts, and world languages</li>
                <li>Advisory program for social-emotional learning</li>
                <li>Opportunities for leadership and extracurricular involvement</li>
              </ul>
              <p>
                We emphasize developing organizational skills, critical thinking, 
                and independence to prepare students for high school.
              </p>
            </Tab>
            
            <Tab eventKey="high" title="High School">
              <h3 className="mt-3">High School (Grades 9-12)</h3>
              <p>
                Our college-preparatory high school program offers a rigorous curriculum 
                with opportunities for advanced study. Students can choose from:
              </p>
              <ul>
                <li>Honors and Advanced Placement (AP) courses</li>
                <li>STEM-focused pathways</li>
                <li>Humanities and Arts concentrations</li>
                <li>Dual enrollment options with local colleges</li>
                <li>Career and technical education programs</li>
              </ul>
              <p>
                Our comprehensive counseling program helps students navigate course 
                selection, college applications, and career planning.
              </p>
            </Tab>
            
            <Tab eventKey="special" title="Special Programs">
              <h3 className="mt-3">Special Programs</h3>
              <p>
                In addition to our standard curriculum, we offer several specialized 
                programs to meet diverse student needs:
              </p>
              <ul>
                <li>
                  <strong>Gifted and Talented:</strong> Enrichment opportunities for 
                  high-achieving students
                </li>
                <li>
                  <strong>Learning Support:</strong> Services for students with 
                  learning differences
                </li>
                <li>
                  <strong>English Language Learners:</strong> Support for non-native 
                  English speakers
                </li>
                <li>
                  <strong>Arts Academy:</strong> Intensive training in visual and 
                  performing arts
                </li>
                <li>
                  <strong>STEM Institute:</strong> Advanced coursework and research 
                  in science and technology
                </li>
              </ul>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Academic Calendar</h2>
          <p>
            Our school year runs from August to June, with breaks aligned with 
            traditional holidays. Detailed calendar information is available 
            through our school office.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Academics