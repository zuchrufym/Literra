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
import PackageModal from '../Modals/PackageModal'

const PackageTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless className="text-center">
      <thead>
        <tr>
          <th>
            <PackageModal />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="d-flex justify-content-between">
            <div className="w-75">
              <Button className="w-100">Math 1</Button>
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
              <Button className="w-100">Math 2</Button>
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
              <Button className="w-100">Math 3</Button>
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

export default PackageTable