import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const ItemForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="itemSubject">Subject</Label>
        <Input type="text" name="itemSubject" id=" " placeholder="ex. Math" />
      </FormGroup>
      <FormGroup>
        <Label for="itemPackage">Package</Label>
        <Input type="text" name="itemPackage" id=" " placeholder="ex. Math 1" />
      </FormGroup>
      <FormGroup>
        <Label for="itemMaterial">Material</Label>
        <Input
          type="text"
          name="itemMaterial"
          id=" "
          placeholder="ex. trigonometri"
        />
      </FormGroup>
      <FormGroup>
        <Label for="itemQuestion">Question</Label>
        <Input type="text" name="itemQuestion" id=" " placeholder="ex. 2+2=" />
      </FormGroup>
      <FormGroup>
        <Label for="itemOption1">Option 1</Label>
        <Input type="text" name="itemOption1" id=" " placeholder="ex. 1" />
      </FormGroup>
      <FormGroup>
        <Label for="itemOption2">Option 2</Label>
        <Input type="text" name="itemOption2" id=" " placeholder="ex. 2" />
      </FormGroup>
      <FormGroup>
        <Label for="itemOption3">Option 3</Label>
        <Input type="text" name="itemOption3" id=" " placeholder="ex. 3" />
      </FormGroup>
      <FormGroup>
        <Label for="itemOption4">Option 4</Label>
        <Input type="text" name="itemOption3" id=" " placeholder="ex. 4" />
      </FormGroup>
      <FormGroup>
        <Label for="itemOption5">Option 5</Label>
        <Input type="text" name="itemOption5" id=" " placeholder="ex. 5" />
      </FormGroup>
      <FormGroup>
        <Label for="itemAnswerKey">Answer key</Label>
        <Input type="text" name="answerKey" id=" " placeholder="4" />
      </FormGroup>
      <FormGroup>
        <Label for="itemCognitiveLevel">Cognitive level</Label>
        <Input type="text" name="cognitiveLevel" id=" " placeholder="ex. C1" />
      </FormGroup>
      <FormGroup>
        <Label for="itemDiscrimination">Discrimination</Label>
        <Input
          type="text"
          name="itemDiscrimination"
          id=" "
          placeholder="ex. -5"
        />
      </FormGroup>
      <FormGroup>
        <Label for="itemDifficult">Difficult</Label>
        <Input type="text" name="itemDifficult" id=" " placeholder="ex. -5" />
      </FormGroup>
      <FormGroup>
        <Label for="itemStatistic">Statistic item</Label>
        <Input type="text" name="itemStatistic" id=" " placeholder="ex. 0" />
      </FormGroup>
    </Form>
  )
}

export default ItemForm