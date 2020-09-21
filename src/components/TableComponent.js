import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Spinner } from 'reactstrap'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'

const defaultSorted = [
  {
    dataField: 'id',
    order: 'asc',
  },
]

const TableComponent = (props) => {
  const columns = [
    {
      dataField: 'id',
      text: 'id',
      sort: true,
      headerStyle: () => {
        return { width: '5%' }
      },
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'address',
      text: 'Address',
      sort: true,
    },
    {
      dataField: 'username',
      text: 'username',
      sort: true,
    },
  ]

  return (
    <div className="p-4">
      <h3 className="font-weight-bold">Student Testing Now</h3>
      {props.students ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.students}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div className="p-3">
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                bordered={false}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.error ? (
            <h4>{props.error}</h4>
          ) : (
            <Spinner color="dark"></Spinner>
          )}
        </div>
      )}
    </div>
  )
}

export default TableComponent