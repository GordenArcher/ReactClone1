import './App.css'
import Buttons from './Buttons'
import Cards from './Cards'
import Charts from './Charts'
import Dashboard from './Dashboard'
import Forms from './Forms'
import Modals from './Modals'
import Pages from './Pages'
import Sidebar from './Sidebar'
import Tables from './Tables'
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
        <Route path='/Forms' element={<Forms />} />
        <Route path='/Cards' element={<Cards />} />
        <Route path='/Charts' element={<Charts />} />
        <Route path='/Buttons' element={<Buttons />} />
        <Route path='/Modals' element={<Modals />} />
        <Route path='/Tables' element={<Tables />} />
        <Route path='/Pages' element={<Pages />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
