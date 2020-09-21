import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import ExamSubjectForm from '../Forms/ExamSubjectForm'
import ExamPackageForm from '../Forms/ExamPackageForm'

const ExamPackageModal = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        <FontAwesomeIcon icon={faPlus} /> New
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add new exam packages</ModalHeader>
        <ModalBody>
          <ExamPackageForm></ExamPackageForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ExamPackageModal