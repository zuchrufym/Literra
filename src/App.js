import React from 'react'
import './App.css'
import NavmainComponent from './components/NavmainComponent'
import NavsideComponent from './components/NavsideComponent'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route>
        <div className="Apps">
          <div className="p-2">
            <NavsideComponent />
          </div>
          <div className="main-content">
            <NavmainComponent />
          </div>
        </div>
      </Route>
    </Router>
  )
}

export default App