import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ExamSubjectModal from '../Modals/ExamSubjectModal'
import ExamPackageCard from '../Cards/ExamPackageCard'

const ExamPackageTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  let array = [
    {
      id: 1,
      name: 'Math 1',
    },
    {
      id: 2,
      name: 'Math 2',
    },
    {
      id: 3,
      name: 'Math 3',
    },
  ]

  return (
    <Table borderless>
      <tbody>
        {array.map((array) => (
          <tr>
            <td>
              <ExamPackageCard name={array.name} id={array.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ExamPackageTable