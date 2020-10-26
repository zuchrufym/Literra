import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ExamSubjectForm from '../Forms/ExamSubjectForm'
import {
  deleteDataExamSubject,
  postExamSubjectCreate,
} from '../../Actions/ExamSubjectActions'
import swal from 'sweetalert'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    getResponDataExamSubject: state.examSubjects.getResponDataExamSubject,
    errorResponDataExamSubject: state.examSubjects.errorResponExamSubject,
  }
}
//

class ExamSubjectModal extends Component {
  handleSubmit(data) {
    this.props.dispatch(postExamSubjectCreate(data))
  }

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render() {
    if (
      this.props.getResponDataExamSubject ||
      this.props.errorResponDataExamSubject
    ) {
      if (this.props.errorResponDataExamSubject) {
        swal(
          'Exam Subject Failed to Create',
          this.props.errorResponDataExamSubject,
          'error',
        )
        this.props.dispatch(deleteDataExamSubject())
      } else {
        swal(
          'Exam Subject Created',
          'Name :' + this.props.getResponDataExamSubject.name,
          'success',
        )
      }
    }

    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.toggleModal()}
          className="w-100"
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Modal isOpen={this.state.showModal} toggle={() => this.toggleModal()}>
          <ModalHeader toggle={() => this.toggleModal()}>
            Add new exam subjects
          </ModalHeader>
          <ModalBody>
            <ExamSubjectForm
              onSubmit={(data) => this.handleSubmit(data)}
              onCloseModal={() => this.toggleModal()}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ExamSubjectModal)