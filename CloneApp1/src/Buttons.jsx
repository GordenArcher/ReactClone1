import './assets/CSS/buttons.css'

const Buttons = () => {
  return (
    <div className="buttons_wrapp">
      <div className="buttons_app">
        <div className="buttons_head">
          <h1 style={{fontSize:'1.9rem'}}>Buttons</h1>
        </div>

        <div className="buttons_main">
          <main>
            <div className="butt_main_head">
              <h2>Sizes</h2>
            </div>

            <div className="buttons_button">
              <div className="tonsss">
                <div className="butt lgb">
                  <button>Larger Buttons</button>
                </div>
                <div className="butt lb">
                  <button>Large Buttons</button>
                </div>
                <div className="butt rb">
                  <button>Regular Buttons</button>
                </div>
                <div className="butt db">
                  <button disabled>Disable</button>
                </div>
                <div className="butt sb">
                  <button>Small</button>
                </div>
              </div>
            </div>

            <div className="text">
              <h2>Apply w-full to any button to create a block level button.</h2>
            </div>

            <div className="icon_buttons">
              
              <div className="icons_buttons_head">
                <h2>Icons</h2>
              </div>

              <div className="butt sb">
                <button>Icon Right <i className="bi bi-heart-fill"></i> </button>
              </div>
              <div className="butt sb">
                <button> <i className="bi bi-heart-fill"></i> Icon Left</button>
              </div>
              <div className="butt sb round">
                <button>
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
              <div className="butt sb round">
                <button>
                  <i className="bi bi-pencil"></i>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Buttons