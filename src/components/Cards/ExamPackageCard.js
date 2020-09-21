import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ExamPackageCard = (props) => {
  return (
    <div className="BaYsc">
      <Link
        to={'/qbank/'}
        className="cRDmY d-flex justify-content-between px-3"
      >
        <div className="align-self-center">{props.name}</div>
      </Link>
      <div className="cRDmY d-flex justify-content-between px-4">
        <a className="align-self-center ml-4">
          <FontAwesomeIcon icon={faEdit} />
        </a>
        <a className="align-self-center mr-4">
          <FontAwesomeIcon icon={faTrash} />
        </a>
      </div>
    </div>
  )
}

export default ExamPackageCard