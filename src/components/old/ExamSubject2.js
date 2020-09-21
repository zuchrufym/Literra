import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
  faEraser, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const ExamSubject2 = (props) => {
  return (
    <div className="CaExSu2">
      <div className="full-height align-self-center">
        <div className="align-content-center full-width full-height">
            <button className="ExSu align-self-center full-width">Social</button>
           
            
        </div>
      </div>

      <div className="d-flex justify-content-between full-width">
        <div className="full-width align-self-center pr-1"><button className="ExSu"><FontAwesomeIcon icon={faPencilAlt} size="md"  /></button></div>
        <div className="full-width align-self-center pl-1"> <button className="ExSu"><FontAwesomeIcon icon={faEraser} size="md"  /></button></div>
      </div>
      
    </div>
  )
}

export default ExamSubject2