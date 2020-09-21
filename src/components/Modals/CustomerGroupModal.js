import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import CustomerGroupForm from '../Forms/CustomerGroupForm'
import CustomerGroupForm from '../Forms/CustomerGroupForm'
// import ExamSubjectForm from '../Forms/ExamSubjectForm'

const CustomerGroupModal = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button color="primary" onClick={toggle} className="w-100">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add new exam subjects</ModalHeader>
        <ModalBody>
          <CustomerGroupForm />
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

export default CustomerGroupModal