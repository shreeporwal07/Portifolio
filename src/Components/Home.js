import React from "react";
import "./Home.css";
import ReactRotatingText from "react-rotating-text";
import Footer from "./Footer";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function handleClick() {
  window.location.href = "/About";
}
function Home() {
  return (
    <>
      <div className="home">
        <div className="home1">
          <p>Hello!</p>
          <h1>
            <span>I'm&nbsp;</span>
            <span>Shriya</span>
          </h1>
          <div className="text">
            <ReactRotatingText
              className="text1"
              items={[
                "Web Developer",
                "Programmer",
                "Tech Enthusiast",
                "Designer",
              ]}
              pause={400}
              emptyPause={1000}
            />
          </div>
          <p>
            Technical Executive | CS Club, MNIT Jaipur
            <br></br>Designer | Mavericks, MNIT Jaipur
          </p>
          <div className="km">
            <button onClick={handleClick}><div>Know More</div><KeyboardDoubleArrowRightIcon className="arrow"/></button>
          </div>
        </div>
        <div className="foot"><Footer/></div>
      </div>
    </>
  );
}

export default Home;
