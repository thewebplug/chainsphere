import {useNavigate} from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

    return (
      <main className="auth">
        <div className="auth__card1">
          <div className="auth__card1__logo">
            Chainsphere Logo
          </div>
  
          <h1 className="auth__card1__title">Let’s sign you up!</h1>
  
          <form className="auth__card1__form">
            <input
              type="text"
              className="auth__card1__form__input"
              placeholder="Enter Full Name"
            />
            <input
              type="email"
              className="auth__card1__form__input"
              placeholder="Email"
            />
            <input
              type="text"
              className="auth__card1__form__input"
              placeholder="username"
            />

<div className="auth__card1__form__input-group">
  <input type="text" className="auth__card1__form__input-group__input" />
  <button className="auth__card1__form__input-group__button">Connect wallet</button>
  </div>            
            <input
              type="text"
              className="auth__card1__form__input"
              placeholder="Password"
            />
            <input
              type="text"
              className="auth__card1__form__input"
              placeholder="Confirm Password"
            />
  
           
  
            <button className="auth__card1__form__button">Sign up</button>
  
            <h3 className="auth__card1__form__login">
            Already have an account? <span className="pointer" onClick={() => navigate("/login")}>Login</span>
            </h3>
          </form>
        </div>
        <div className="auth__card2">
        <div className="auth__card2__carousel">
        <h2 className="auth__card2__carousel__title">
        Experiencing the World of Decentralized social media with <br /> <span>Chainsphere</span>
          </h2>
      
  
  </div>
        </div>
      </main>
    );
  }
  