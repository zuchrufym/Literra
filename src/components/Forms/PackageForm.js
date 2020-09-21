import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const PackageForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="packageName">Package Name</Label>
        <Input
          type="text"
          name="packageName"
          id=" "
          placeholder="ex. math 1"
        />
      </FormGroup>
    </Form>
  )
}

export default PackageForm