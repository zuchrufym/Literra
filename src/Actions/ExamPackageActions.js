import axios from 'axios'

export const GET_EXAMPACKAGE_LIST = 'GET_EXAMPACKAGE_LIST'
export const GET_EXAMPACKAGE_DETAIL = 'GET_EXAMPACKAGE_DETAIL'
export const POST_EXAMPACKAGE_CREATE = 'POST_EXAMPACKAGE_CREATE'
export const PUT_EXAMPACKAGE_UPDATE = 'PUT_EXAMPACKAGE_UPDATE'

export const getExamPackageList = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:4000/exam_packages/read')
      .then(function (response) {
        dispatch({
          type: GET_EXAMPACKAGE_LIST,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        console.log(error.message)
        dispatch({
          type: GET_EXAMPACKAGE_LIST,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const getExamPackageDetail = (id) => {
  return (dispatch) => {
    axios
      .get('http://localhost:4000/exam_packages/read/' + id)
      .then(function (response) {
        dispatch({
          type: GET_EXAMPACKAGE_DETAIL,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_EXAMPACKAGE_DETAIL,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const deleteDataExamPackage = () => {
  return (dispatch) => {
    dispatch({
      type: GET_EXAMPACKAGE_LIST,
      playload: {
        data: false,
        errorMessage: false,
      },
    })
    dispatch({
      type: POST_EXAMPACKAGE_CREATE,
      playload: {
        data: false,
        errorMessage: false,
      },
    })
  }
}

export const postExamPackageCreate = (data) => {
  return (dispatch) => {
    axios
      .post('http://localhost:4000/exam_package/createas', data)
      .then(function (response) {
        console.log(response)
        dispatch({
          type: POST_EXAMPACKAGE_CREATE,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        dispatch({
          type: POST_EXAMPACKAGE_CREATE,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const putExamPackageUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put('http://localhost:4000/exam_package/update' + id, data)
      .then(function (response) {
        console.log(response)
        dispatch({
          type: PUT_EXAMPACKAGE_UPDATE,
          playload: {
            data: response.data,
            errorMessage: false,
          },
        })
      })
      .catch(function (error) {
        dispatch({
          type: PUT_EXAMPACKAGE_UPDATE,
          playload: {
            data: false,
            errorMessage: error.message,
          },
        })
      })
  }
}

export const deleteExamPackage = (id) => {
  return () => {
    axios
      .delete('http://localhost:4000/exam_package/delete/' + id)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}