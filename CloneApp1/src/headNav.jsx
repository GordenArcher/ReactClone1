import { useState } from 'react'
import Avartar from './assets/avatar.jpeg'
import './assets/CSS/header.css'
import ProfilePop from './components/profilePop'
import 'boxicons'

const Header = () => {

    const [toggleProfilePop, settoggleProfilePop] = useState(false)
    const [themeIconChange, setThemeIconChange] = useState("sun")

    const handleThemeChangeFunction = () => {
        setThemeIconChange(
            themeIconChange === "sun" ? "moon" : "sun"
        )
    }

  return (
    <div className='header'>
        <div className='a'>
            <div className="search_box">
                <input type="text" placeholder='Search for projects' />
                <div className="serach_icon" style={{position:'absolute', top:'25%', marginLeft:'10px'}}>
                    <box-icon name='search'></box-icon>
                </div>
            </div>

            <div className="header_right">
                <div>
                    <div className="header_theme">
                        <div className="theme">
                            <button className="theme_icon navBut" onClick={handleThemeChangeFunction}>
                                <div>
                                    <box-icon name={themeIconChange} color='#ffffff' ></box-icon>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="notification">
                    <div className="notify">
                        <button className='navBut'>
                            <div className="notify_icon">
                                <box-icon name='bell' color='#ffffff' className="icon"></box-icon>
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