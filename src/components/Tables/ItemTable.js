import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faPlus,
  faRemoveFormat,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ItemModal from '../Modals/ItemModal'

const ItemTable = (props) => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Table borderless className="text-center">
      <thead>
        <tr>
          <th colSpan="15" className="w-100">
            <ItemModal />
          </th>
        </tr>
        <tr>
          <th>id</th>
          <th>subject</th>
          <th>package</th>
          <th>material</th>
          <th>question</th>
          <th>option 1</th>
          <th>option 2</th>
          <th>option 3</th>
          <th>option 4</th>
          <th>option 5</th>
          <th>answer key</th>
          <th>cognitive level</th>
          <th>discrimination</th>
          <th>difficulty</th>
          <th>statistic item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>math</td>
          <td>math 1</td>
          <td>trigonometri</td>
          <td>2 + 2 =</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>4</td>
          <td>C1</td>
          <td>-5</td>
          <td>-5</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>math</td>
          <td>math 2</td>
          <td>aljabar</td>
          <td>2 * 2 =</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>4</td>
          <td>C6</td>
          <td>5</td>
          <td>5</td>
          <td>10</td>
        </tr>
        <tr>
          <td>3</td>
          <td>math</td>
          <td>math 3</td>
          <td>trigonometri</td>
          <td>2 ** 2 =</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>4</td>
          <td>C3</td>
          <td>0</td>
          <td>3</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ItemTable