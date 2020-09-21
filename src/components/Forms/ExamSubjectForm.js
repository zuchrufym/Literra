import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const ExamSubjectForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="examSubjectName">Subject Name</Label>
        <Input
          type="text"
          name="examSubjectName"
          id=" "
          placeholder="ex. math"
        />
      </FormGroup>
    </Form>
  )
}

export default ExamSubjectForm