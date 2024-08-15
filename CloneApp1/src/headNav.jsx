import { useState } from 'react'
import Avartar from './assets/avatar.jpeg'
import './assets/CSS/header.css'
import ProfilePop from './components/profilePop'
import 'boxicons'

const Header = ({showSidebar, themeIconChange, handleThemeChangeFunction, themesColor, themesColorBo}) => {

    const [toggleProfilePop, settoggleProfilePop] = useState(false)

  return (
    <div className='header'>
        <div className='a' style={themesColor}>

            <div className="search_box">
                <div className="mini_but">
                    <div className="size">
                        <button 
                        onClick={showSidebar} 
                        >
                            <div className="resize">
                            <i className='bx bxs-chevron-right'></i>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="div" style={{position:'relative'}}>
                    <div className="search_" style={themesColorBo}>
                        <input type="text" placeholder='Search for projects' />
                    </div>
                </div>
            </div>

            <div className="header_right">
                <div>
                    <div className="header_theme">
                        <div className="theme">
                            <button className="theme_icon navBut" onClick={handleThemeChangeFunction}>
                                <div>
                                    <box-icon name={themeIconChange} color={themesColor.color} ></box-icon>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="notification">
                    <div className="notify">
                        <button className='navBut'>
                            <div className="notify_icon">
                                <box-icon name='bell' color={themesColor.color} className="icon"></box-icon>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="header_profileImg" style={{width:'100%', height: '100%', position:'relative'}}>
                    <div className="profile_img">
                        <img src={Avartar} alt="User" className='userImg' onClick={() => {
                            settoggleProfilePop(prevToggle => !prevToggle)
                        }} />
                    </div>

                    <div>
                        {toggleProfilePop && <ProfilePop />}
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Header