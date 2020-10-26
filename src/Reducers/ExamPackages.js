import {
    GET_EXAMPACKAGE_DETAIL,
    GET_EXAMPACKAGE_LIST,
    POST_EXAMPACKAGE_CREATE,
    PUT_EXAMPACKAGE_UPDATE,
  } from '../Actions/ExamPackageActions'
  
  let initialState = {
    getExamPackagesList: false,
    errorExamPackagesList: false,
    getExamPackageDetail: false,
    errorExamPackageDetail: false,
    getResponDataExamPackage: false,
    errorResponDataExamPackage: false,
  }
  
  const examPackages = (state = initialState, action) => {
    switch (action.type) {
      case GET_EXAMPACKAGE_LIST:
        return {
          ...state,
          getExamPackagesList: action.playload.data,
          errorExamPackagesList: action.playload.errorMessage,
        }
      case GET_EXAMPACKAGE_DETAIL:
        return {
          ...state,
          getExamPackageDetail: action.playload.data,
          errorExamPackageDetail: action.playload.errorMessage,
        }
      case POST_EXAMPACKAGE_CREATE:
        return {
          ...state,
          getResponDataExamPackage: action.playload.data,
          errorResponDataExamPackage: action.playload.errorMessage,
        }
      case PUT_EXAMPACKAGE_UPDATE:
        return {
          ...state,
          getResponDataExamPackage: action.playload.data,
          errorResponDataExamPackage: action.playload.errorMessage,
        }
  
      default:
        return state
    }
  }
  
  export default examPackages