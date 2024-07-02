// import React from 'react'
// import SidebarData from './components/Data'
import 'boxicons'
import './assets/CSS/sidebar.css'
import { SidebarData } from './components/Data'

const Sidebar = () => {
  return (
    <>
        <div className='side_nav'>
            <div className="side_bar">
                <div className="head">
                    <h3>G-KANAD</h3>
                </div>

                <div className="nav">
                    <nav>
                        <div className="sideNav">
                            <div className="side-links">
                                <ul>
                                    {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div  className={item.cName} style={{width: '100%'}}>
                                                <a href='/Dashboard' >
                                                    <div className="icon">
                                                        <box-icon name={item.icon} color='#fff'></box-icon>
                                                    </div>
                                                    <div className="descript">
                                                        {item.description}
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    )
                                    })}
                                </ul>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar