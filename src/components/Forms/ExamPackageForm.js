import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const ExamPackageForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="examPackageName">Exam Package Name</Label>
        <Input
          type="text"
          name="examPackageName"
          id=" "
          placeholder="ex. math 1"
        />
      </FormGroup>
    </Form>
  )
}

export default ExamPackageForm