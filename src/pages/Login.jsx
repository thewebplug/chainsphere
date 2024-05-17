import {useNavigate} from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

    return (
      <main className="auth">
        <div className="auth__card1">
          <div className="auth__card1__logo">
            Chainsphere Logo
          </div>
  
          <h1 className="auth__card1__title">Welcome back!</h1>
  
          <form className="auth__card1__form">
            <input
              type="text"
              className="auth__card1__form__input"
              placeholder="Enter username"
            />
            <input
              type="password"
              className="auth__card1__form__input"
              placeholder="Password"
            />

            <div className="auth__card1__form__option">OR</div>

<div className="auth__card1__form__input-group">
  <input type="text" className="auth__card1__form__input-group__input" />
  <button className="auth__card1__form__input-group__button">Connect wallet</button>
  </div>   
            
           
  
            <button className="auth__card1__form__button">Login</button>
  
            <h3 className="auth__card1__form__login">
            Don't have an account? <span className="pointer" onClick={() => navigate("/signup")}>Signup</span>
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
  