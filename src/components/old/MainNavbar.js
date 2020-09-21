import React from 'react';
import { Col, Row } from 'reactstrap';

const MainNavbar = (props) => {
  return (
    <div className='MainNavbar'>
      <Row>
        <Col md='10'><h1>Good Afternoon, Septian!</h1></Col>
        <Col style={{backgroundColor:"white"}} md= '2'> <h5>admin short name and photo</h5> </Col>
      </Row>
    </div>
  );
};

export default MainNavbar;