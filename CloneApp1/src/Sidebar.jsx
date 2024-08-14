// import React from 'react'
// import SidebarData from './components/Data'
import 'boxicons'
import './assets/CSS/sidebar.css'
import { SidebarData } from './components/Data'
import NavDataComp from './components/navDataComp'
import { useState } from 'react'
const Sidebar = () => {

    const [resizeSide, setResizeSide] = useState(true)
    const [iconChange, setIconChange] = useState('bx bxs-chevron-left')
    const [removeText, setRemoveText] = useState(true)
    const [showhead, setShowhead] = useState(true)

    const toggleSidebar = () => {
        const newWidth = resizeSide ? '100px' : '230px';
        document.querySelector('.side_bar').style.width = newWidth;
        setShowhead(!showhead)
        setResizeSide(!resizeSide);
        setIconChange(
            iconChange == 'bx bxs-chevron-left' ? 'bx bxs-chevron-right' : 'bx bxs-chevron-left'
        )

        setRemoveText(!removeText);
    };
    

  return (
    <>
        <div className='side_nav'>
            <div className="side_bar">
                <div className="head">
                    {showhead &&
                    <h3>
                        <a href="/Dashboard" style={{color:'#fff'}}>G-KANAD</a>
                    </h3>
                    }
                </div>

                <div className="nav">
                    <nav>
                        <div className="mini_but">
                            <div className="size">
                                <button 
                                onClick={toggleSidebar} 
                                >
                                    <div className="resize">
                                    <i className={iconChange}></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="sideNav">
                            <div className="side-links">
                                <ul>
                                    {SidebarData.map((item, index) => {
                                    return (
                                        <NavDataComp key={index}
                                        icon={item.icon}
                                        description={removeText ? item.description : ''}
                                        href={item.href} />
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