import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button } from 'reactstrap'
import ExamSubjectModal from '../Modals/ExamSubjectModal'

const EmployeesTable = (props) => {
  let employees = [
    {
      username: 'septianindra',
      password: 'septianindra',
      level: 'admin',
      idcard: '123142',
      name: 'septian indra wicaksana',
      dob: '16 September 1997',
      gender: 'male',
      address: 'bandung',
      phone: ' 08111122022',
    },
    {
      username: 'septianindra',
      password: 'septianindra',
      level: 'admin',
      idcard: '123142',
      name: 'septian indra wicaksana',
      dob: '16 September 1997',
      gender: 'male',
      address: 'bandung',
      phone: ' 08111122022',
    },
    {
      username: 'septianindra',
      password: 'septianindra',
      level: 'admin',
      idcard: '123142',
      name: 'septian indra wicaksana',
      dob: '16 September 1997',
      gender: 'male',
      address: 'bandung',
      phone: ' 08111122022',
    },
    {
      username: 'septianindra',
      password: 'septianindra',
      level: 'admin',
      idcard: '123142',
      name: 'septian indra wicaksana',
      dob: '16 September 1997',
      gender: 'male',
      address: 'bandung',
      phone: ' 08111122022',
    },
  ]
  return (
    <Table className="mt-4">
      <thead>
        <tr>
          <th>name</th>
          <th>gender</th>
          <th>id card</th>
          <th>level</th>
          <th>birth</th>
          <th>address</th>
          <th>phone</th>
          <th>edit</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employees) => (
          <tr>
            <td>{employees.name}</td>
            <td>{employees.gender}</td>
            <td>{employees.idcard}</td>
            <td>{employees.level}</td>
            <td>{employees.dob}</td>
            <td>{employees.address}</td>
            <td>{employees.phone}</td>
            <td>
              <Button className="mr-1  button-remove">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </td>
            <td>
              <Button className="button-remove button-remove">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default EmployeesTable