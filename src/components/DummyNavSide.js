import React from 'react'
import { Col, Nav, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faBriefcase,
  faEye,
  faFileExcel,
  faIdCardAlt,
  faPen,
  faThList,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'

const Example = (props) => {
  return (
    <Col className="full-height  justify-content-center">
      <Nav className="full-height" vertical>
        <NavItem className="my-5 align-self-center">
          <NavLink>
            <FontAwesomeIcon icon={faPen} size="2x" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faThList} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faBookOpen} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faBriefcase} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faUserGraduate} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faFileExcel} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="mb-4 align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faEye} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
        <NavItem className="m-auto align-self-center">
          <NavLink href="#">
            <FontAwesomeIcon icon={faIdCardAlt} size="lg" color="#284a63"/>
          </NavLink>
        </NavItem>
      </Nav>
    </Col>
  )
}

export default Example