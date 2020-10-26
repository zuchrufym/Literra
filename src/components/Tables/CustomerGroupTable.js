import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button } from 'reactstrap'

import CustomerGroupModal from '../Modals/CustomerGroupModal'


const CustomerGroupTable = (props) => {
  let customer = props.customer

  return (
    
<div>
<Table id="test" borderless className="text-center">
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
</div>

  )
}

export default CustomerGroupTable