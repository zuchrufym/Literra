import React from 'react'
import { Button, Card, CardBody, Col, Nav, Row } from 'reactstrap'
import ReportCard from './Cards/ReportCard'

function ReportComponent() {
  return (
    <div className="full-height">
      <div className="my-card full-height">
        <div className="full-height p-4">
          <h3 className="pb-4">Students</h3>
          <ReportCard />
        </div>
      </div>
    </div>
  )
}

export default ReportComponent