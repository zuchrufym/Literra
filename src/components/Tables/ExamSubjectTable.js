import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faPlus,
  faRemoveFormat,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import ExamSubjectModal from '../Modals/ExamSubjectModal'
import ExamSubjectModal from '../Modals/ExamSubjectModal'

const ExamSubjectTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless className="text-center">
      <thead>
        <tr>
          <th>
            <ExamSubjectModal />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="d-flex justify-content-between">
            <div className="w-75">
              <Button className="w-100">Math</Button>
            </div>
            <div>
              <Button className="mr-1  button-remove">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button className="button-remove">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="d-flex justify-content-between">
            <div className="w-75">
              <Button className="w-100">Science</Button>
            </div>
            <div>
              <Button className="mr-1">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="d-flex justify-content-between">
            <div className="w-75">
              <Button className="w-100">Social</Button>
            </div>
            <div>
              <Button className="mr-1">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ExamSubjectTable