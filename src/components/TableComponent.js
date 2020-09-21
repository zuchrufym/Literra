import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import {Spinner} from 'reactstrap'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'

function ExTableComponent(){
    const columns
}

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable keyField='id' data={products} columns={columns}/>