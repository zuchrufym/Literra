import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import ExamSubjectModal from '../Modals/ExamSubjectModal'
import ExamPackageCard from '../components/ExamPackageCard'
import ExamPackageCard2 from '../components/ExamPackageCard2'
import ExamSubject1 from './ExamSubject1'
import ExamSubject2 from './ExamSubject2'

const ExamSubjectTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless>
      <tbody>
        <tr>
          <td>
            <ExamSubject1></ExamSubject1>
          </td>
        </tr>
        <tr>
          <td>
          <ExamSubject2></ExamSubject2>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ExamSubjectTable