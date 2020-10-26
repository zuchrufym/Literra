import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import ReportForm from '../Forms/ReportForm'

function ReportModal(props) {
  const { className } = props
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  return (
    <div>
      <Button onClick={toggle} color="link" className="">
        <FontAwesomeIcon icon={faDownload} />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Download Report</ModalHeader>
        <ModalBody>
          <ReportForm />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ReportModal