// import React from 'react'
// import SidebarData from './components/Data'
import 'boxicons'
import './assets/CSS/sidebar.css'
import { SidebarData } from './components/Data'
import NavDataComp from './components/navDataComp'

const Sidebar = () => {

  return (
    <>
        <div className='side_nav'>
            <div className="side_bar">
                <div className="head">
                    <h3>
                        <a href="/Dashboard" style={{color:'#fff'}}>G-KANAD</a>
                    </h3>
                </div>

                <div className="nav">
                    <nav>
                        <div className="sideNav">
                            <div className="side-links">
                                <ul>
                                    {SidebarData.map((item, index) => {
                                    return (
                                        <NavDataComp key={index} {...item} />
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