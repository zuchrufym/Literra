import axios from 'axios'

export const GET_EXAMSUBJECT_LIST = 'GET_EXAMSUBJECT_LIST'
export const GET_EXAMSUBJECT_DETAIL = 'GET_EXAMSUBJECT_DETAIL'
export const POST_EXAMSUBJECT_CREATE = 'POST_EXAMSUBJECT_CREATE'
export const PUT_EXAMSUBJECT_UPDATE = 'PUT_EXAMSUBJECT_UPDATE'

export const getExamSubjectList = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:4000/exam-subject/read')
      .then(function (response) {
        dispatch({
          type: GET_EXAMSUBJECT_LIST,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        console.log(error.message)
        dispatch({
          type: GET_EXAMSUBJECT_LIST,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const getExamSubjectDetail = (id) => {
  return (dispatch) => {
    axios
      .get('http://localhost:4000/exam-subject/read/' + id)
      .then(function (response) {
        dispatch({
          type: GET_EXAMSUBJECT_DETAIL,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_EXAMSUBJECT_DETAIL,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const deleteDataExamSubject = () => {
  return (dispatch) => {
    dispatch({
      type: GET_EXAMSUBJECT_LIST,
      playload: {
        data: false,
        errorMessage: false,
      },
    })
    dispatch({
      type: POST_EXAMSUBJECT_CREATE,
      playload: {
        data: false,
        errorMessage: false,
      },
    })
  }
}

export const postExamSubjectCreate = (data) => {
  return (dispatch) => {
    axios
      .post('http://localhost:4000/exam-subject/createas', data)
      .then(function (response) {
        console.log(response)
        dispatch({
          type: POST_EXAMSUBJECT_CREATE,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        dispatch({
          type: POST_EXAMSUBJECT_CREATE,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const putExamSubjectUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put('http://localhost:4000/exam-subject/update' + id, data)
      .then(function (response) {
        console.log(response)
        dispatch({
          type: PUT_EXAMSUBJECT_UPDATE,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        dispatch({
          type: PUT_EXAMSUBJECT_UPDATE,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const deleteExamSubject = (id) => {
  return () => {
    axios
      .delete('http://localhost:4000/exam-subject/delete/' + id)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}