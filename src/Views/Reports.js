import React from 'react'
import ExamReport from './ExamReportOne'
import { Button, Col, Row } from 'reactstrap'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Reports() {
  return (
    <div className="cRDmYnew">
      
          <Row style={{paddingTop:'2rem'}}>
            <Col className="d-flex" style={{justifyContent:"center"}}>
            <Link to="/examreportoutput1" target="blank">
            <Button>Download Student Report Test Output 1</Button>
            </Link>
            </Col>
            <Col className="d-flex" style={{justifyContent:"center"}}>
            <Link to="/examreportoutput2" target="blank">
            <Button>Download Student Report Test Output 2</Button>
            </Link>
            </Col>
          </Row>
          
        </div>
  )
}

export default Reports