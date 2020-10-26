import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Row, Col, Input, FormGroup, Button } from 'reactstrap'
import { reduxForm, Field } from 'redux-form'
import ExamSubjectValidation from '../../Validations/ExamSubjectValidation'
import { deleteDataExamSubject } from '../../Actions/ExamSubjectActions'
import swal from 'sweetalert'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    getResponDataExamSubject: state.examSubjects.getResponDataExamSubject,
    errorResponDataExamSubject: state.examSubjects.errorResponExamSubject,
  }
}

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col>
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: 'red' }}>{error}</p>) ||
          (warning && <p style={{ color: 'brown' }}>{warning}</p>))}
    </Col>
  </Row>
)

class ExamSubjectForm extends Component {
  state = {
    redirect: false,
  }
  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/exams" />
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                onClick={this.setRedirect}
                className="float-right"
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    )
  }
}

ExamSubjectForm = reduxForm({
  form: 'formCreateExamSubject',
  validate: ExamSubjectValidation,
  enableReinitialize: true,
})(ExamSubjectForm)

export default connect(mapStateToProps, null)(ExamSubjectForm)