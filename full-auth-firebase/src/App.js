import "./App.css";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <div className="phone-login-home">
        <img
          className="imgPhone"
          src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
          alt="img"
        />
        <div className="img1">
          
        </div>
      </div>

      {/* <img className="img1" src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"/> */}

      <Signup className="signupContainerApp" />
    </div>
  );
}

export default App;
