import GmFu from "./gmailFurions/gmailFution"
import "./Box.css"

function Box() {
  return (
    <div className="container">
      <div className="container-box">
          <div className="box-contant">
              <div className="contant-taxt">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
              </div>
              <div className="Suc">
                <section className="turn">
                  <img src="/src/assets/images/icon/icon-list.svg" 
                    alt="icon-list" 
                    className="icon"
                  />
                  <p>Product discovery and buildign what matters</p>
                </section>
                <section className="turn">
                  <img src="/src/assets/images/icon/icon-list.svg" 
                    alt="icon-list" 
                    className="icon"
                  />
                  <p>Measuring to ensure updates are a success</p>
                </section>
                <section className="turn">
                  <img
                    src="/src/assets/images/icon/icon-list.svg" 
                    alt="icon-list" 
                    className="icon"
                  />
                  <p>And much more!</p>
                </section>
              </div>
              <GmFu />
          </div>
          <picture className="box-img">
            <source media="(max-width: 789px)" srcSet="/src/assets/images/illustration-sigup-mobile.svg" />
            <img
              role="presentation"
              src="/src/assets/images/illustration-sign-up-desktop.svg" 
              alt="illustration-sign-up-desktop"
            />
          </picture>
      </div>
    </div>
  )
}

export default Box