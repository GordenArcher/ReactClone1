import './assets/CSS/cards.css'
import { grid } from './components/Data'
import GridDataComp from './components/GridDataComp'

const Cards = () => {
  return (
    <div className="cards_app">
      <div className="cards">
        <div className="cards_root">
          <div className="cards_header">
            <h1 style={{fontSize:'1.9rem'}}>Cards</h1>
          </div>

          <div className="col_main">
            <section className='flex'>
              <div className="main__cards">
                <section className='wer'>
                  <div className="bg_section">
                    <h3>Big section cards</h3>
                  </div>

                  <div className="bg_sect___">
                    <div className="bg_container">
                      <div className="bgggf">
                        <p>Large, full width sections goes here</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="respon">
                  <div className="respon_head">
                    <h3>Responsive cards</h3>
                  </div>
                  <div className="res_cars">
                    <div className="res_grid">
                      {grid.map((item, index) => {
                              return (
                                  <GridDataComp key={index} {...item} />
                              )
                          })}
                    </div>
                  </div>
                </section>

                <section className="card_title">
                  <div className="card_w_tilte">
                    <div className="card_w_t_head">
                      <h3>Cards with title</h3>
                    </div>

                    <div className="card_tittt_cont">
                      <div className="contt">
                        <div className="cont_grid">
                          <div className="row">
                            <div className="column">
                              <div className="column_head">
                                <h2>Revenue</h2>
                              </div>

                              <div className="column_body">
                                <div className="bod">
                                  <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row colored">
                            <div className="column">
                              <div className="column_head">
                                <h2>Colored card</h2>
                              </div>

                              <div className="column_body">
                                <div className="bod">
                                  <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards