import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const StudentForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="studentName">Name</Label>
        <Input
          type="text"
          name="studentName"
          id="studentName"
          placeholder="Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="studentAddress">Address</Label>
        <Input
          type="text"
          name="studentAddress"
          id="studentAddress"
          placeholder="Address"
        />
      </FormGroup>
      <FormGroup>
        <Label for="studentUsername">Username</Label>
        <Input
          type="text"
          name="studentUsername"
          id="studentUsername"
          placeholder="Username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="studentPassword">Password</Label>
        <Input
          type="text"
          name="studentPassword"
          id="studentPassword"
          placeholder="Password"
        />
      </FormGroup>
    </Form>
  )
}

export default StudentForm