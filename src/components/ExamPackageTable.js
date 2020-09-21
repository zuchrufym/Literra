import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import ExamSubjectModal from '../Modals/ExamSubjectModal'
import ExamPackageCard from '../components/ExamPackageCard'
import ExamPackageCard2 from '../components/ExamPackageCard2'

const ExamPackageTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless>
      <tbody>
        <tr>
          <td>
            <ExamPackageCard></ExamPackageCard>
          </td>
        </tr>
        <tr>
          <td><ExamPackageCard2></ExamPackageCard2>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ExamPackageTable