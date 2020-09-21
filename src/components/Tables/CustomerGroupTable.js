import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ExamSubjectModal from '../Modals/ExamSubjectModal'
import CustomerGroupModal from '../Modals/CustomerGroupModal'
// import ExamPackageCard from '../components/Cards/ExamPackageCard'
import ExamPackageCard from '../Cards/ExamPackageCard'
// import ExamSubjectTable from './components/TablesExamSubjectTable'
import ExamSubjectTable from '../Tables/ExamSubjectTable'

const CustomerGroupTable = (props) => {
  const { buttonLabel, className } = props

  let customer = props.customer

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless className="text-center">
      <thead>
        <tr>
          <th>
            <CustomerGroupModal />
          </th>
        </tr>
      </thead>
      <tbody>
        {customer.map((customer) => (
          <tr>
            <td className="d-flex justify-content-between">
              <div className="w-75">
                <Button className="w-100 button-remove">{customer.name}</Button>
              </div>
              <div>
                <Button className="mr-1 button-remove">
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button className="button-remove">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CustomerGroupTable