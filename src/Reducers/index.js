import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import examSubjects from './ExamSubjects'

export default combineReducers({
  examSubjects,
  form: formReducer,
})