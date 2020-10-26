import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
} from 'reactstrap'

const ReportForm = (props) => {
  return (
    <Table borderless className="align-self-center">
      <thead>
        <tr>
          <td>Result 1</td>
          <td>
            <Button color="link" className="">
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </td>
        </tr>
        <tr>
          <td>Result 2</td>
          <td>
            <Button color="link" className="">
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  )
}

export default ReportForm