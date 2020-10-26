import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ExamSubjectModal from '../Modals/ExamSubjectModal'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  deleteDataExamSubject,
  deleteExamSubject,
} from '../../Actions/ExamSubjectActions'

const mapStateToProps = (state) => {
  return {
    dataExamSubject: state.examSubjects.getExamSubjectsList,
    error: state.examSubjects.errorExamSubjectsList,
  }
}

class ExamSubjectTable extends Component {
  handleSubmit(id) {
    this.props.dispatch(deleteExamSubject(id))
  }

  render() {
    let examSubject = Object.values(this.props.dataExamSubject)
    return (
      <Table borderless className="text-center">
        <thead>
          <tr>
            <th>
              <ExamSubjectModal />
            </th>
          </tr>
        </thead>
        <tbody>
          {examSubject.map((examSubject) => (
            <tr>
              <td className="d-flex justify-content-between">
                <div className="w-75">
                  <Button className="w-100 button-remove">
                    {examSubject.id}
                    {examSubject.name}
                  </Button>
                </div>
                <div>
                  <Button className="mr-1  button-remove">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>

                  <Button
                    onClick={() =>
                      this.props.dispatch(deleteExamSubject(examSubject.id))
                    }
                    className="button-remove button-remove"
                  >
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
}

export default connect(mapStateToProps, null)(ExamSubjectTable)