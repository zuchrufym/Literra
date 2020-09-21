import React from 'react'
import { Col, Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faBriefcase,
  faEye,
  faFileExcel,
  faIdCardAlt,
  faSignOutAlt,
  faThList,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

const Example = (props) => {
  return (
    <Col className="FHseYW  justify-content-center">
      <Nav className="FHseYW" vertical>
        <NavItem className="my-5 align-self-center">
          <NavLink>
            <img src={logo} width="40px"></img>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/">
            <FontAwesomeIcon icon={faThList} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/exams">
            <FontAwesomeIcon icon={faBookOpen} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/qbank">
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/students">
            <FontAwesomeIcon icon={faUserGraduate} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/reports">
            <FontAwesomeIcon icon={faFileExcel} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/proctoring">
            <FontAwesomeIcon icon={faEye} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <Link to="/employees">
            <FontAwesomeIcon icon={faIdCardAlt} size="lg" />
          </Link>
        </NavItem>
        <NavItem className="m-auto align-self-center">
          <Link to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          </Link>
        </NavItem>
      </Nav>
    </Col>
  )
}

export default Example