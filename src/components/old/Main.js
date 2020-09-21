import React from 'react';
import { Row, Col, Card, Table} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEraser, faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'

const Main = (props) => {
  return (
    <div className='Main full-height'>
        <Row className="full-height">
        <Col className="full-height p-4" md='3'>
                <Row className="full-height">
                  <Card className='Groups p-4 h-auto'>
                  <Row>
                    <h5 style={{padding:"1vh"}}>Groups</h5>
                  </Row>
                  <Row className="full-width" style={{justifyContent:"center", marginBottom:"1vh"}}>
                    <button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>+</button>
                  </Row>
                  <Row style={{justifyContent:"center", marginBottom:"1vh"}}>
                    <Col md="8" className="margin-auto"><button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>Kalkud</button></Col>
                    <Col md="2"><Row className="margin-auto"><button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem'}}><FontAwesomeIcon icon={faPencilAlt} size="md" justifyContent="center" /></button></Row></Col>
                    <Col md="2"><Row className="margin-auto"><button className="full-width" style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem'}}><FontAwesomeIcon icon={faEraser} size="md"/></button></Row></Col>
                  </Row>
                  <Row className="full-width" style={{justifyContent:"center", marginBottom:"1vh"}}>
                    <button className='full-width' style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>Astra</button>
                  </Row>
                  <Row className="full-width" style={{justifyContent:"center", marginBottom:"1vh"}}>
                    <button className='full-width' style={{backgroundColor: "white", color:"#284a63", borderRadius:'0.75rem',fontWeight:'bold'}}>Unair</button>
                  </Row>
                  </Card>
                </Row>
        </Col>

        <Col className="h-auto p-4" md='9'>
          <Card className='Students p-4 full-height' >
            <Row>
              <h5>Students</h5>
            </Row>
            <Row className="p-1"><button style={{borderRadius:'0.5rem', backgroundColor:'white'}}>new</button></Row>
            <Row  style={{justifyContent:"center"}}>
              <Table>
                <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Address</th>
                <th>username</th>
                <th>password</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img className="img-fluid" src="otto.png" alt="otto" style={{maxBlockSize:'15vh'}}></img></td>
                  <td>Otto</td>
                  <td>Bandung</td>
                  <td>otts</td>
                  <td>123456</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><img className="img-fluid" src="gempi.jpg" alt="gempi" style={{maxBlockSize:'15vh'}}></img></td>
                  <td>gempi</td>
                  <td>Jakarta</td>
                  <td>gemps</td>
                  <td>1q2w3e</td>
                </tr>
              </Table>
            </Row>
          </Card>
          
        </Col>

        
        </Row>
    </div>
  );
};

export default Main;