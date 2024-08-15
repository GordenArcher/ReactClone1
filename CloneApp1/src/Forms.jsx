import './assets/CSS/forms.css'

const Forms = () => {

  return (

    <div className="forms__">
      <div className="form__wrapper">
        <div className="_forms_">
          <div className="forms_header">
            <div className="form_head">
              <h1 style={{fontSize:'1.9rem'}}>Forms</h1>
            </div>
          </div>

          <div className="general_element">
            <div className="element_head">
              <h4>Element</h4>
            </div>

            <div className="element_container">
              <div className="ele_container">
                <div>
                  <div className="name_input">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Gorden Archer' />
                  </div>
                </div>
                <div>
                  <div className="account_type_head">
                    <h4>Account Type</h4>
                  </div>

                  <div className="account_type">

                    <div className="personal dfr">
                      <input type="radio" name='accType' id='personal' />
                      <label htmlFor="personal">Personal</label>
                    </div>

                    <div className="business dfr">
                      <input type="radio" name='accType' id='business' />
                      <label htmlFor="business">Business</label>
                    </div>
                  </div>
                </div>

                <div className='req_limit'>
                  <div className="req_limit_head">
                    <h4>Request Limit</h4>
                  </div>

                  <div className="limit__ sel">
                    <select name="amout" id="">
                      <option value="1000" selected>$1,000</option>
                      <option value="10000">$10,000</option>
                      <option value="15000">$15,000</option>
                      <option value="10000">$100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="multiple_sel">
                    <div className="multi_select">
                      <h4>Multiple Select</h4>
                    </div>
                    <div className="select_mult sel">
                      <select name="selctMul" multiple>
                        <option value="Option1" selected>Option1</option>
                        <option value="Option2">Option2</option>
                        <option value="Option3">Option3</option>
                        <option value="Option4">Option4</option>
                        <option value="Option5">Option5</option>
                        <option value="Option6">Option6</option>
                        <option value="Option7">Option7</option>
                        <option value="Option8">Option8</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='message'>
                  <div className="meassege_head">
                    <h4>Message</h4>
                  </div>
                  <div className="message_box">
                    <textarea name="messageBox" placeholder='send us a message'></textarea>
                  </div>
                </div>

                <div>
                  <div className="policy_agree">
                    <div className="check">
                      <input type="checkbox" id='checkPolicy'/>
                    </div>

                    <div className="policy">
                      <label htmlFor="checkPolicy">
                        <p>I agree to the <a>privacy policy</a> </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="validation">
            <div className="validate__">
              <div className="input_invalid put">
                <label htmlFor="inputIn">Input Invalid</label>
                <input type="text" id='inputIn'  placeholder='Gorden Archer'/>
                <span>Your password is too short.</span>
              </div>

              <div className="input_valid put">
                <label htmlFor="inputIn">Input valid</label>
                <input type="text" id='inputVal'  placeholder='Gorden Archer'/>
                <span>Your password is strong.</span>
              </div>

              <div className="input_help put">
                <label htmlFor="inputhelp">Helper Text</label>
                <input type="text" id='inputhelp' placeholder='Gorden Archer' />
                <span>Your password must be at least 6 characters long.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )

}

export default Forms