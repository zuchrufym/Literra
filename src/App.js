import React from 'react'
import './App.css'
// import Main from './components/Main'
import Exams from './components/Exams'
import QuestionBank from './components/QuestionBank'

import NavBarComponent from './components/NavBarComponent'
import NavsideComponent from './components/NavsideComponent'
import ExamPackageCard from './components/ExamPackageCard'
import ExamPackageTable from './components/ExamPackageTable'

function App() {
  return (
      <div className="Apps">
      <div className="p-2">
        <NavsideComponent></NavsideComponent>
      </div>
      <div className="full-height Main">
        <NavBarComponent></NavBarComponent>
        <Exams></Exams>
      </div>
    </div>
    
  )
}

export default App