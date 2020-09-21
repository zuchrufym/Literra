import React from 'react';
import { Row, Col, Card} from 'reactstrap';
import ExamPackageTable from './ExamPackageTable';
import ExamSubjectTable from './ExamSubjectTable';
import EmptySpaceTable from './EmptySpaceTable';

const Exams = (props) => {
  return (
    <div className=' full-height'>
        <Row className="p-2">
            <EmptySpaceTable></EmptySpaceTable>
        </Row>

        <Row className="p-2">
        <Col className=" full-height p-2" md="3">
                <Card className="full-height p-2" style={{borderRadius:'1rem'}}>
                    <h5>Exam Subject</h5>
                    <button style={{borderRadius:'0.5rem', backgroundColor:'#284a63', fontWeight:'bold', color:'white', border:"#284a63"}}>+</button>
                    <ExamSubjectTable></ExamSubjectTable>
                </Card>
            </Col>
            <Col className="p-2" md="9">
                <Card className="full-height p-2" style={{borderRadius:'1rem'}}>
                <h5>Exam Packages</h5>
                <Row className="p-1"><button style={{borderRadius:'0.5rem', backgroundColor:'#284a63',  color:'white' ,width:'15%', border:'#284a63'}}>+ New</button></Row>
                <ExamPackageTable></ExamPackageTable>
                </Card>
            </Col>
        </Row>
    </div>
  );
};

export default Exams;