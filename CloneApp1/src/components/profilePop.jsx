import 'boxicons'
import '../assets/CSS/header.css'

const ProfilePop = () => {
  return (
    <div className="pop" style={{width:'170px', height:'160px', position:'absolute', right:'0%', zIndex:'99', transition:'all .3s ease'}}>

      <div className='pop_container'>
        <div className="profile_pop">
            <ul>
              <li>
                <a href="#" style={{display:'flex', alignItems:'ccenter', gap:'10px'}}>
                  <div className="icon">
                    <box-icon name="user" color='#fff' ></box-icon>
                  </div>

                  <div className="pop_content">
                    <p>
                      Profile
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" style={{display:'flex', alignItems:'ccenter', gap:'10px'}}>
                  <div className="icon">
                    <box-icon name="cog" color="#ffffff"></box-icon>
                  </div>

                  <div className="pop_content">
                    <p>
                      Settings
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" style={{display:'flex', alignItems:'ccenter', gap:'10px'}}>
                  <div className="icon">
                    <box-icon name='log-out' color='#fff' ></box-icon>
                  </div>

                  <div className="pop_content">
                    <p>
                      Logout
                    </p>
                  </div>
                </a>
              </li>
            </ul>
        </div>
    </div>
                        
  </div>

  )
}

export default ProfilePop