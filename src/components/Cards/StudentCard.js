import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Table } from 'reactstrap'

const StudentCard = (props) => {
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
    <Table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {array.map((array) => (
          <tr>
            <td>{array.name}</td>
            <td>{array.address}</td>
            <td>{array.username}</td>
            <td>{array.password}</td>
            <td>
              <a className="align-self-center text-center ">
                <FontAwesomeIcon icon={faEdit} />
              </a>
            </td>
            <td>
              <a className="align-self-center text-center ">
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default StudentCard