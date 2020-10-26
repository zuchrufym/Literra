import {
  GET_EXAMSUBJECT_DETAIL,
  GET_EXAMSUBJECT_LIST,
  POST_EXAMSUBJECT_CREATE,
  PUT_EXAMSUBJECT_UPDATE,
} from '../Actions/ExamSubjectActions'

let initialState = {
  getExamSubjectsList: false,
  errorExamSubjectsList: false,
  getExamSubjectDetail: false,
  errorExamSubjectDetail: false,
  getResponDataExamSubject: false,
  errorResponDataExamSubject: false,
}

const examSubjects = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMSUBJECT_LIST:
      return {
        ...state,
        getExamSubjectsList: action.playload.data,
        errorExamSubjectsList: action.playload.errorMessage,
      }
    case GET_EXAMSUBJECT_DETAIL:
      return {
        ...state,
        getExamSubjectDetail: action.playload.data,
        errorExamSubjectDetail: action.playload.errorMessage,
      }
    case POST_EXAMSUBJECT_CREATE:
      return {
        ...state,
        getResponDataExamSubject: action.playload.data,
        errorResponDataExamSubject: action.playload.errorMessage,
      }
    case PUT_EXAMSUBJECT_UPDATE:
      return {
        ...state,
        getResponDataExamSubject: action.playload.data,
        errorResponDataExamSubject: action.playload.errorMessage,
      }

    default:
      return state
  }
}

export default examSubjects