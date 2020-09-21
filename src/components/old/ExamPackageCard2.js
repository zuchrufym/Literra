import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faEdit,
  faEraser, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const ExamPackageCard2 = (props) => {
  return (
    <div className="BaYscc">
      <div className="cRDmYy d-flex justify-content-between">
        <div className="align-self-center pl-4">
            <a href="#" style={{color:'black'}}>Math 2</a>
        </div>
        <div className="align-self-center"><FontAwesomeIcon icon={faClock} style={{marginRight:'0.5rem'}}></FontAwesomeIcon></div>
      </div>
      <div className="cRDmYyy d-flex justify-content-between">
        <div className="align-self-center"><button style={{backgroundColor: "white", border:'white', color:"#284a63", borderRadius:'0.75rem', marginLeft:'1.5rem'}}><FontAwesomeIcon icon={faEdit} size="md"  /></button></div>
        <div className="align-self-center"> <button style={{backgroundColor: "white", border:'white', color:"#284a63", borderRadius:'0.75rem', marginRight:'1.5rem'}}><FontAwesomeIcon icon={faTrashAlt} size="md"  /></button></div>
      </div>
      
    </div>
  )
}

export default ExamPackageCard2