import React from 'react';
import { Row, Col, Card, Table} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEraser, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

const Main = (props) => {
  return (
    <div className='height-auto'>
        <table>
          <tr>
            <th>No. </th>
            <th>Nama </th>
            <th>Username </th>
            <th>Password </th>
          </tr>
          <tr>
            <td>1</td>
            <td>Septian</td>
            <td>septianiw</td>
            <td>1q2w3e</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Putri</td>
            <td>amaristyap</td>
            <td>3e2w1q</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Odi</td>
            <td>zuchrufym</td>
            <td>123456</td>
          </tr>
        </table>
        
    </div>
  );
};

export default Main;