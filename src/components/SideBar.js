import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'reactstrap';

const SideBar = (props) => {
  return (
    <div className='SideBar'>
        <Container className="themed-container" fluid="sm">
        <Row style={{marginBottom:'5vh'}}>
            Here's the logo and the LITERRA-ID name
        </Row>

        <Row style={{justifyContent:"center"}}>
            <h5>Dashboard</h5>
        </Row>

        <Row style={{justifyContent:"center"}}>
            <h5>Exam</h5>
        </Row>

        <Row style={{justifyContent:"center"}}>
            <h5>Question Bank</h5>
        </Row>

        <Row style={{justifyContent:"center"}}>
            <h5>Student's</h5>
        </Row>

        <Row style={{justifyContent:"center"}}>
            <h5>Report</h5>
        </Row>

        <Row style={{justifyContent:"center"}}>
            <h5>Proctoring</h5>
        </Row>
        </Container>
          
    </div>
  );
};

export default SideBar;