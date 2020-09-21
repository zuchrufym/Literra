import React from 'react'
import { Button } from 'reactstrap'
import StudentCard from '../components/Cards/StudentCard'
import StudentModal from '../components/Modals/StudentModal'
import CustomerGroupTable from '../components/Tables/CustomerGroupTable'

function Students() {
  let array = [
    {
      id: 1,
      name: 'Putri',
      address: 'bandung',
      username: 'put',
      password: 'put',
    },
    {
      id: 2,
      name: 'Unair',
      address: 'bandssung',
      username: 'pusssst',
      password: 'pussssst',
    },
    {
      id: 3,
      name: 'UNESA',
      address: 'baaaandung',
      username: 'putaaa',
      password: 'putaaaaaaa',
    },

    {
      id: 4,
      name: 'UNPAD',
      address: 'bandfffung',
      username: 'puffft',
      password: 'puffft',
    },
  ]

  return (
    <div className="FHseYW">
      <div className="BaYsa">
        <div className="cRDmY p-4">
          <h3>Groups</h3>
          <hr />
          <CustomerGroupTable customer={array} />
        </div>
        <div className="cRDmY p-5">
          <h3>Students</h3>
          <StudentModal />
          <StudentCard />
        </div>
      </div>
    </div>
  )
}

export default Students