import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

function ExTableComponent(props) {
  const columns = [
    {
      dataField: 'id',
      text: 'Id customer',
    },
    {
      dataField: 'name',
      text: 'Name customer',
    },
    {
      dataField: 'address',
      text: 'Address',
    },
  ]

  return (
    <div>
      <BootstrapTable keyField="id" data={props.customer} columns={columns} />
    </div>
  )
}

export default ExTableComponent