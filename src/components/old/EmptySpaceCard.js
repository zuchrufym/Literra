import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
  faEraser, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const EmptySpaceCard = (props) => {
  return (
    <div className="EmSpCa">
      <div className="cRDmYy d-flex justify-content-between">
        <div className="align-self-center pl-3">
            Empty space
        </div>
      </div>
    </div>
  )
}

export default EmptySpaceCard