import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import ExamSubjectModal from '../Modals/ExamSubjectModal'
import ExamPackageCard from '../components/ExamPackageCard'
import ExamPackageCard2 from '../components/ExamPackageCard2'
import EmptySpaceCard from './EmptySpaceCard'

const ExamPackageTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless>
      <tbody>
        <tr>
          <td style={{textAlign:'center'}}>
            <EmptySpaceCard></EmptySpaceCard>
          </td>
          <td>
          <EmptySpaceCard></EmptySpaceCard>
          </td>
          <td>
          <EmptySpaceCard></EmptySpaceCard>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ExamPackageTable