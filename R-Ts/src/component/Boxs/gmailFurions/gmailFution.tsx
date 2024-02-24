import { useNavigate } from "react-router";
import { ChangeEvent, useState } from 'react'
import "./gmailFurion.css"


function gmailFution() {
  const navigate = useNavigate();
  
  const [Email , setEmail] = useState<string>("")
  const [validemail , setValidEmail] = useState<boolean>(false);
  const Re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const status = validemail === true ? "Sub":"Error"
  const statu = validemail === true ? "Sp-sub":"Sp-error"

  const ReL =   (event:ChangeEvent <HTMLInputElement>)    => {
    const inputEmail = event.target.value
    setEmail(event.target.value)
    setValidEmail(Re.test(inputEmail) || inputEmail === "" )
  }

  const handleSubmit =  (event: { preventDefault: () => void; })   => {
    event.preventDefault(); 
    if (validemail) {
      navigate("/Sub") 
    return;
  }
  }

  return (

    <form>
        <div className="container-gmail" > 

            <div className="container-taxt">
              <label htmlFor="email">Email address</label>
            <p className= {status}  >Valid email required</p>
            </div>
            
            <input
              className={statu}
              placeholder='email@company.com'
              name="gmail"
              type="gmail" 
              value = {Email} 
              onChange = {ReL}
            />
          
          <button className='btn-form-gm' type="button" onClick={handleSubmit} >Subscribe to monthly newsletter</button>

        </div>
    </form>
  )
}
export default gmailFution

