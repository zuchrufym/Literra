import React, { Component } from 'react'
import ExamSubjectTable from '../components/Tables/ExamSubjectTable'
import ExamPackageTable from '../components/Tables/ExamPackageTable'
import { connect } from 'react-redux'
import { getExamSubjectList } from '../Actions/ExamSubjectActions'

class Exams extends Component {
  componentDidMount() {
    this.props.dispatch(getExamSubjectList())
  }

  render() {
    return (
      <div className="FHseYW">
        <div className="BaYsa">
          <div className="cRDmY  p-4">
            <h3>Exam Subjects</h3>
            <hr />
            <ExamSubjectTable />
          </div>
          <div className="cRDmY p-4">
            <h3>Exam Packages</h3>
            <hr />
            <ExamPackageTable />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Exams)