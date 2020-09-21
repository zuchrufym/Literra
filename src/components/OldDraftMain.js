import React from 'react';
import { Row, Col, Card, Table} from 'reactstrap';

const Main = (props) => {
  return (
    <div className='Main full-height'>
        
<Row>
        <Col md='10' style={{marginTop:'5vh'}}>
                <Row>
                  <Card className='QuickAction'>
                  <h2>Quick Action</h2>
                  <Row className='d-flex' style={{justifyContent:"center", marginBottom:"5vh"}}>
                    <Col><Row style={{justifyContent:'center'}}><button className='d-flex' style={{backgroundColor: "darkblue", color:"white", blockSize:'10vh', borderRadius:'1rem',fontWeight:'bold'}}>Add New Exam</button></Row></Col>
                    <Col><Row style={{justifyContent:'center'}}><button className='d-flex' style={{backgroundColor: "darkblue", color:"white", blockSize:'10vh', borderRadius:'1rem',fontWeight:'bold'}}>Add New Customer</button></Row></Col>
                    <Col><Row style={{justifyContent:'center'}}><button className='d-flex' style={{backgroundColor: "darkblue", color:"white", blockSize:'10vh', borderRadius:'1rem',fontWeight:'bold'}}>Proctoring Window</button></Row></Col>
                </Row>
                  </Card>
                </Row>

                <Row style={{marginTop:'5vh'}}> 
                  <Card className='StudentTestingNow'>
                  <h2>Student Testing Now</h2>
                  <Row>
                    <Table>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>username</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Septian</td>
                        <td>IW</td>
                        <td>septianiw</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Putri</td>
                        <td>AP</td>
                        <td>putria</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Yusrinourdi</td>
                        <td>MZ</td>
                        <td>zuchrufym</td>
                      </tr>

                    </Table>
                  </Row>
                  </Card>
                </Row>
        </Col>

        <Col md='2'>
          <Card className='EQS' style={{borderRadius:'1rem'}}>
            <Row  style={{justifyContent:"center"}}>
              <h4>Exam</h4>
            </Row>
            <Row style={{justifyContent:"center"}}><h1>1</h1></Row>
            <Row  style={{justifyContent:"center"}}>
              <h4>Question</h4>
            </Row>
            <Row style={{justifyContent:"center"}}><h1>120</h1></Row>
            <Row  style={{justifyContent:"center"}}>
              <h4>Student</h4>
            </Row>
            <Row style={{justifyContent:"center"}}><h1>150</h1></Row>
          </Card>
        </Col>

        
        </Row>
    </div>
  );
};

export default Main;