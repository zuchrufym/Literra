import React from 'react';
import { Row, Col, Card, Table} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEraser, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const Main = (props) => {
  return (
    <div className='height-auto'>
        <Row className="empty-space p-2">
            <Col className="p-2" md="3">
                <Card className="full-height full-width" style={{justifyContent:"center", justifySelf:"center"}}>Empty Space</Card>
            </Col>
            <Col className="p-2" md="6">
                <Card className="full-height" style={{justifyContent:"center"}}>Empty Space</Card>
            </Col>
            <Col className="p-2" md="3">
                <Card className="full-height" style={{justifyContent:"center"}}>Empty Space</Card>
            </Col>

        </Row>

        <Row className="height-auto-justify p-2">
        <Col className="p-2" md="3">
                <Card className="full-height p-2" style={{borderRadius:'1rem'}}>
                    <h5>Packages</h5>
                    <Row className="full-width p-1" style={{justifyContent:"center", marginBottom:"0.5rem"}}>
                    <button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>+</button>
                  </Row>
                  <Row className=" full-width p-1" style={{justifyContent:"center", marginBottom:"0.5rem"}}>
                    <Col md="8" className="margin-auto"><button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>Math 1</button></Col>
                    <Col className=" full-width margin-auto" md="2">
                        <button style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faPencilAlt} size="md" justifyContent="center" /></button>
                    </Col>
                    <Col className=" full-width margin-auto" md="2">
                        <button style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faEraser} size="md"/></button>
                    </Col>
                  </Row>
                  <Row className=" full-width p-1" style={{justifyContent:"center", marginBottom:"0.5rem"}}>
                    <Col md="8" className="margin-auto"><button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>Math 2</button></Col>
                    <Col className=" full-width margin-auto" md="2">
                        <button style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faPencilAlt} size="md" justifyContent="center" /></button>
                    </Col>
                    <Col className=" full-width margin-auto" md="2">
                        <button style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faEraser} size="md"/></button>
                    </Col>
                  </Row>
                  <Row className=" full-width p-1" style={{justifyContent:"center", marginBottom:"0.5rem"}}>
                    <Col md="8" className="margin-auto"><button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>Math 3</button></Col>
                    <Col className=" full-width margin-auto" md="2">
                        <button style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faPencilAlt} size="md" justifyContent="center" /></button>
                    </Col>
                    <Col className=" full-width margin-auto" md="2">
                        <button style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faEraser} size="md"/></button>
                    </Col>
                  </Row>
                </Card>
            </Col>
            <Col className="p-2" md="9">
                <Card className="full-height p-2" style={{borderRadius:'1rem'}}>
                <h5>Questions</h5>
                <Row className="p-1"><button style={{borderRadius:'1rem', backgroundColor:'white', fontWeight:'bold', color:'#284a63' ,width:'20%'}}>new</button></Row>
                <Table className="">
                    <tr>
                        <td>
                            1. 
                        </td>
                        <td>
                            2+2=...
                        </td>
                        <td>
                            <Row>
                                <a href="#">a. 1</a>
                            </Row>
                            <Row>
                                <a href="#">b. 2</a>
                            </Row>
                            <Row>
                                <a href="#">c. 3</a>
                            </Row>
                            <Row>
                                <a href="#">d. 4</a>
                            </Row>
                        </td>
                        <td style={{textAlign:'end', width:'20%'}}>
                            <button className="" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem'}}><FontAwesomeIcon icon={faPencilAlt} size="md"/></button>
                            <button className="" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem', marginLeft:'1rem'}}><FontAwesomeIcon icon={faTrashAlt} size="md"/></button>
                        </td>
                    </tr>
                </Table>
                </Card>
            </Col>
        </Row>
    </div>
  );
};

export default Main;