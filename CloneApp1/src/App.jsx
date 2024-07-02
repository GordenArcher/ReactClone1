import './App.css'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Header from './headNav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <div className="containerApp">
      <Sidebar />
      <Header />
    </div>
    
    <Router>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
