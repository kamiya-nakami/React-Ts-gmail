import './subscribing.css'
import { useNavigate } from 'react-router'

function Subscribing() {
  const navigate = useNavigate();
  return (
    <div className='container-ThanksPage'>
      <div className='ThanksPage'>
        <img 
        src="/src/assets/images/icon/icon-success.svg" 
        alt="icon-success" 
        loading='lazy'
        />
        <div className="text">
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <span></span>. Plese open it and click the button inside to comfirm your scbscription </p>
        </div>
        <button type="button" className='btn' onClick={() => navigate("/") }>Dismiss messge</button>
      </div>

    </div>
  )
}

export default Subscribing