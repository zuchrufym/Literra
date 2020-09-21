import React from 'react'
import './App.css'
import { Col, Row, Table } from 'reactstrap'
import DummyNavSide from './components/DummyNavSide'

function App() {
  return (
      <div className="full-height">
          <Row>
              <Col md="4">
                <DummyNavSide></DummyNavSide>
              </Col>
              <Col md="8">
                <Row> NavBar</Row>
                <Row> Main</Row>
              </Col>
          </Row>
      
    </div>
    
  )
}

export default App

import React from 'react'
import './App.css'
// import Main from './components/Main'
import Exams from './components/Exams'
import QuestionBank from './components/QuestionBank'

import NavBarComponent from './components/NavBarComponent'
import NavsideComponent from './components/NavsideComponent'

function App() {
  return (
      <div className="Apps full-height">
      <div className="full-height p-2">
        <NavsideComponent></NavsideComponent>
      </div>
      <div className="full-height main-content">
        <NavBarComponent></NavBarComponent>
        <QuestionBank></QuestionBank>
      </div>
    </div>
    
  )
}

export default App


import React from 'react'
import './App.css'
function App() {
  return (
      <div className="full-height">
        <Table id="table-to-xls">
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
        </Table>
      </div>
    
  )
}

export default App