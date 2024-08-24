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
import { useState } from 'react'


function App() {

  const [resizeSide, setResizeSide] = useState(false)

  const showSidebar = () => {
    setResizeSide(!resizeSide)
  }

  const hideSidebar = () => {
    setResizeSide(!resizeSide)
  }
  
  const [themeIconChange, setThemeIconChange] = useState(() => {
    return localStorage.getItem('icon') || 'sun';
  });

  const handleThemeChangeFunction = () => {
    const newIcon = themeIconChange === "sun" ? "moon" : "sun";
    setThemeIconChange(newIcon);
    localStorage.setItem('icon', newIcon);
  };

  const themesColor = {
    background: themeIconChange === "sun" ? '#000' : '#fff',
    color : themeIconChange === 'sun' ? '#ffffff' : '#000',
  }

  const themesColorBo = {
    border: themeIconChange === 'sun' ? null : '1px solid #000',
    borderRadius: '6px'
  }

  const themescolor = {
    color : themeIconChange === 'sun' ? '#ffffff' : '#000',
  };

  return ( 
    <>
    <div className="containerApp">
      <div className={`side ${resizeSide ? 'show_side' : ''}`} style={themesColor}>
        <div className='_roooooot__ side___nav__'>
          <Sidebar 
          themesColor={themesColor}
          themescolor={themescolor}
          resizeSide={resizeSide}
          hideSidebar={hideSidebar} 
          />
        </div>
      </div>
    
      <div className="main___app">
        <div className="__main__">
          <div className="app_headerrr" >
            <div className="__head__ stack">
              <Header 
              handleThemeChangeFunction={handleThemeChangeFunction} 
              themeIconChange={themeIconChange} 
              themesColor={themesColor}
              themesColorBo={themesColorBo}
              showSidebar={showSidebar}
              resizeSide={resizeSide}
              />
            </div>
          </div>
          
          <div className="routte">
            <Router>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/Forms' element={<Forms />} />
                <Route path='/Cards' element={<Cards />} />
                <Route path='/Charts' element={<Charts />} />
                <Route path='/Buttons' element={<Buttons />} />
                <Route path='/Modals' element={<Modals />} />
                <Route path='/Tables' element={<Tables />} />
                <Route path='/Pages' element={<Pages />} />
                </Routes>
            </Router>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
