import React from 'react'
// import TableExamSubjects from '../Components/TableExamSubjects'
import TableExamSubjects from '../components/TableExamSubjects'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ExamSubjectTable from '../components/Tables/ExamSubjectTable'
import ExamPackageTable from '../components/Tables/ExamPackageTable'
import ExamPackageModal from '../components/Modals/ExamPackageModal'
function Exams() {
  let students = [
    {
      id: 1,
      name: 'Math',
    },
    {
      id: 2,
      name: 'Social',
    },
    {
      id: 3,
      name: 'Science',
    },
  ]

  return (
    <div className="mRwey">
      <div className="QrYSs">
        <div className="cRDmY"></div>
        <div className="cRDmY"></div>
        <div className="cRDmY"></div>
      </div>
      <div className="BaYsa">
        <div className="cRDmY  p-4">
          <h3>Exam Subjects</h3>
          <hr />
          <ExamSubjectTable />
        </div>
        <div className="cRDmY p-4">
          <h3>Exam Packages</h3>
          <hr />
          <ExamPackageModal />
          <ExamPackageTable />
        </div>
      </div>
    </div>
  )
}

export default Exams