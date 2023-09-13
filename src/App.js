import React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import "@fontsource/source-sans-pro";

function App() {
  const stringDate = "13:00 Oct 25, 2023";
  const date = new Date(stringDate);

  const [registerTrial, setRegisterTrial] = useState(false);
  // const [email, setEmail] = useState("");
  const [surveyComplete, setSurveyComplete] = useState(false);
  return (
    <div className="App">
      {/* Section A */}
      <div className="sectionA">
        <div className="timerBlock backgroundColorBlue">
          <div className="timerText textColorWhite timerDays">10</div>
          <div className="substring textColorWhite">Days</div>
        </div>
        <div className="timerBlock backgroundColorLightGrey">
          <div className="timerText textColorBlack timerHours">12</div>
          <div className="substring textColorBlack">Hours</div>
        </div>
        <div className="timerBlock backgroundColorLightGrey">
          <div className="timerText textColorBlack">:</div>
          <div className="substring textColorBlack"></div>
        </div>
        <div className="timerBlock backgroundColorLightGrey">
          <div className="timerText textColorBlack timerMinutes">44</div>
          <div className="substring textColorBlack">Minutes</div>
        </div>
        <div className="timerBlock backgroundColorLightGrey">
          <div className="timerText textColorBlack">:</div>
          <div className="substring textColorBlack"></div>
        </div>
        <div className="timerBlock backgroundColorLightGrey">
          <div className="timerText textColorBlack timerSeconds">06</div>
          <div className="substring textColorBlack">Seconds</div>
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
          {/* Button */}
          <a href="#">
            <div className="buttonStyle">Sign up for early access</div>
          </a>
          <div className="textStyleCommon textLeft textFontSizeLarge textColorWhite">
            Safeguard your intellectual property while outsourcing
          </div>
          <div className="textStyleCommon textLeft textFontSizeMid textColorWhite">
            Register today to access the early bird offer!
          </div>
        </div>
      </div>

      {/* Section C-1 */}
      <div className="sectionC">
        {/* C.1 */}
        <div
          className="imageBoxLeft"
          style={{ backgroundImage: "url(/assets/img/P1.png)" }}
        />

        {/* C.2 */}
        <div className="textBoxRight">
          <div className="textStyleCommon textLeft textFontSizeMid textColorBlack">
            Unlock the Secrets of Intellectual Property:
          </div>
          <div className="textStyleCommon textLeft textFontSizeLarge textColorBlack">
            Master the art of protecting your ideas, brand, and software in
            today's competitive landscape.
          </div>
          <a href="#">
            <div className="buttonStyle2">Register for the launch</div>
          </a>
        </div>
      </div>

      {/* Section C-2 */}
      <div className="sectionC rowReverse">
        {/* C.1 */}
        <div
          className="imageBoxLeft"
          style={{ backgroundImage: "url(/assets/img/P2.png)" }}
        />

        {/* C.2 */}
        <div className="textBoxRight">
          <div className="textStyleCommon textLeft textFontSizeMid textColorBlack">
            Get Ahead with Insider Strategies:
          </div>
          <div className="textStyleCommon textLeft textFontSizeLarge textColorBlack">
            Learn proven tactics for safeguarding your software using patents,
            copyrights, and trade secrets.
          </div>
          <a href="#">
            <div className="buttonStyle2">Register for the launch</div>
          </a>
        </div>
      </div>

      {/* Section C-3 */}
      <div className="sectionC">
        {/* C.1 */}
        <div
          className="imageBoxLeft"
          style={{ backgroundImage: "url(/assets/img/P3.png)" }}
        />

        {/* C.2 */}
        <div className="textBoxRight">
          <div className="textStyleCommon textLeft textFontSizeMid textColorBlack">
            Unlock the Secrets of Intellectual Property:
          </div>
          <div className="textStyleCommon textLeft textFontSizeLarge textColorBlack">
            Master the art of protecting your ideas, brand, and software in
            today's competitive landscape.
          </div>
          <a href="#">
            <div className="buttonStyle2">Register for the launch</div>
          </a>
        </div>
      </div>

      {/* Section C-4 */}
      <div className="sectionC rowReverse">
        {/* C.1 */}
        <div
          className="imageBoxLeft"
          style={{ backgroundImage: "url(/assets/img/P4.png)" }}
        />

        {/* C.2 */}
        <div className="textBoxRight">
          <div className="textStyleCommon textLeft textFontSizeMid textColorBlack">
            Boost Your Business:
          </div>
          <div className="textStyleCommon textLeft textFontSizeLarge textColorBlack">
            Understand IP tefth to avoid pitfalls and maximize your market
            position.
          </div>
          <a href="#">
            <div className="buttonStyle2">Register for the launch</div>
          </a>
        </div>
      </div>

      {/* Section D */}
      <div className="sectionD">
        <div className="textStyleCommon textCenter textFontSizeMid textColorBlack">
          Be among the first to sign up and gain a competitive edge in the IP
          protection game.
        </div>
        <div className="textStyleCommon textCenter textFontSizeLarge textColorBlack">
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
