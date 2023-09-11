import React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import "@fontsource/source-sans-pro";

function App() {
  return (
    <div className="App">
      {/* Section A */}
      <div className="sectionA">
        <div className="timerBlock timerBlock1">
          <div className="timerText timerText1 timerDays">10</div>
          <div className="substring substring1">Days</div>
        </div>
        <div className="timerBlock timerBlock2">
          <div className="timerText timerText2 timerHours">12</div>
          <div className="substring substring2">Hours</div>
        </div>
        <div className="timerBlock timerBlock2">
          <div className="timerText timerText2">:</div>
          <div className="substring substring2"></div>
        </div>
        <div className="timerBlock timerBlock2">
          <div className="timerText timerText2 timerMinutes">44</div>
          <div className="substring substring2">Minutes</div>
        </div>
        <div className="timerBlock timerBlock2">
          <div className="timerText timerText2">:</div>
          <div className="substring substring2"></div>
        </div>
        <div className="timerBlock timerBlock2">
          <div className="timerText timerText2 timerSeconds">06</div>
          <div className="substring substring2">Seconds</div>
        </div>
      </div>

      {/* Section B */}
      <div className="sectionB">
        {/* React Player */}
        <div className="player-wrapper">
          <ReactPlayer
            url="/assets/video/V1.mp4"
            playing
            muted
            loop
            width="100%"
            height="100%"
            className="react-player"
            controls={false}
          />
        </div>

        {/* Content on top of the video */}
        <div className="gradientOverlay">
          <div className="textStyle1">
            Register today to access the early bird offer!
          </div>
          <div className="textStyle2">
            Safeguard your intellectual property while outsourcing
          </div>
          {/* Button */}
          <a href="#">
            <div className="buttonStyle">Sign up for early access</div>
          </a>
        </div>
      </div>

      {/* Section C */}
      <div className="sectionC">
        {/* C.1 */}
        <div
          className="imageBoxLeft"
          style={{ backgroundImage: "url(/assets/img/P1.png)" }}
        />

        {/* C.2 */}
        <div className="textBoxRight">
          <div className="textStyle3">
            Unlock the Secrets of Intellectual Property:
          </div>
          <div className="textStyle4">
            Master the art of protecting your ideas, brand, and software in
            today's competitive landscape.
          </div>
          <a href="#">
            <div className="buttonStyle2">Register for the launch</div>
          </a>
        </div>
      </div>

      {/* Section D */}
      <div className="sectionD">
        <div className="textStyle5">
          Be among the first to sign up and gain a competitive edge in the IP
          protection game.
        </div>
        <div className="textStyle6">
          Help us shape our platform to fit you by becoming a beta tester -
          you'll also receive exclusive content, insider updates and be part of
          a community redefining the IP theft and security industry.
        </div>
        <a href="#">
          <div className="buttonStyle3">Become a testing partner</div>
        </a>
      </div>
    </div>
  );
}

export default App;
