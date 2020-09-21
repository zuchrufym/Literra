import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const JumboTronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <Row>
              <Col md={1}>
                  what
              </Col>
              <Col md={8}>
                  the
              </Col>
              <Col md={3}>
                  faq
              </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumboTronComponent;