import React from 'react'
import DropdownComponent from './DropdownComponent'
import Dashboard from '../Views/Dashboard'
import Exams from '../Views/Exams'
import Questions from '../Views/Questions'
import Reports from '../Views/Reports'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Students from '../Views/Students'
import Employees from '../Views/Employees'
import ExamReportOne from '../Views/ExamReportOne'
import ExamReportTwo from '../Views/ExamReportTwo'
import Proctor from '../Views/Proctoring/Proctor'

function NavmainComponent() {
  return (
    <div className="MxeRr">
      {/* Navbar */}
      <div className="d-flex justify-content-between px-5">
        <div className="align-self-center">
          <h2 className="font-weight-bold">Good Morning, Septian!</h2>
        </div>
        <div className="align-self-center">
          <DropdownComponent />
        </div>
      </div>
      {/* Main Component */}
      <div className="FHseYW px-5 pb-3">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/exams">
            <Exams />
          </Route>
          <Route exact path="/qbank">
            <Questions />
          </Route>
          <Route exact path="/students">
            <Students />
          </Route>
          <Route exact path="/reports">
            <Reports />
          </Route>
          <Route exact path="/proctoring">
            <Proctor />
          </Route>
          <Route exact path="/employees">
            <Employees />
          </Route>
          <Route exact path="/examreportoutput1">
            <ExamReportOne />
          </Route>
          <Route exact path="/examreportoutput2">
            <ExamReportTwo />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default NavmainComponent