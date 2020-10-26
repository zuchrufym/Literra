import { Table } from 'reactstrap'

import React from 'react'

import ExamPackageCard from '../Cards/ExamPackageCard'
import ExamPackageModal from '../Modals/ExamPackageModal'

const ExamPackageTable = (props) => {
  const examPackageId = 1

  let examPackage = [
    {
      id: 1,
      idExamSubject: 1,
      name: 'Matematika Dasar',
    },
    {
      id: 2,
      idExamSubject: 1,
      name: 'Matematika Teknik',
    },
    {
      id: 3,
      idExamSubject: 2,
      name: 'Biologi Dasar',
    },
    {
      id: 4,
      idExamSubject: 2,
      name: 'Anatomi Manusia',
    },
    {
      id: 5,
      idExamSubject: 2,
      name: 'Anatomi Hewan',
    },
    {
      id: 6,
      idExamSubject: 3,
      name: 'Kimia Dasar',
    },
  ]

  examPackage = examPackage.filter(
    (examPackage) => examPackage.idExamSubject == examPackageId,
  )

  return (
    <Table borderless>
      <thead>
        <tr>
          <th>
            <ExamPackageModal />
          </th>
        </tr>
      </thead>
      <tbody>
        {examPackage.map((examPackage) => (
          <tr>
            <td>
              <ExamPackageCard
                key={examPackage.id}
                name={examPackage.name}
                id={examPackage.id}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ExamPackageTable