// import React from 'react'
// import SidebarData from './components/Data'
import 'boxicons'
import './assets/CSS/sidebar.css'
import { SidebarData } from './components/Data'
import NavDataComp from './components/navDataComp'

const Sidebar = ({sidebarTextStyle, themesColor, themescolor, hideSidebar}) => {

  return (
    <>
        <div className='side_nav'>  
            
            <div className="side_bar">
                <div className="head">
                    <div className="sideeee_heaa">
                        <h3>
                            <a href="/" style={themescolor}>G-KANAD</a>
                        </h3>
                    </div>

                    <div className="mini_">
                        <div className="size">
                            <button 
                            onClick={hideSidebar} 
                            >
                                <div className="resize">
                                <i className='bx bxs-chevron-left'></i>
                                </div>
                            </button>
                        </div>

                    </div>  
                </div>

                <div className="nav">
                    <nav>
                        <div className="sideNav">
                            <div className="side-links">
                                <ul>
                                    {SidebarData.map((item, index) => {
                                    return (
                                        <NavDataComp key={index}
                                        icon={item.icon}
                                        description={item.description}
                                        sidebarTextStyle={sidebarTextStyle}
                                        themesColor={themesColor}
                                        href={item.href} 
                                        />
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