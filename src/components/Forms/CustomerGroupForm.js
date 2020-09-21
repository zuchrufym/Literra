import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const CustomerGroupForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="customerGroup">Name</Label>
        <Input
          type="text"
          name="email"
          id="customerGroup"
          placeholder="with a placeholder"
        />
      </FormGroup>
    </Form>
  )
}

export default CustomerGroupForm