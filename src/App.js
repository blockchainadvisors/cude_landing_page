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
          <div className="RegisterTodayToAccessTheEarlyBirdOffer">
            Register today to access the early bird offer!
          </div>
          <div className="SafeguardYourIntellectualPropertyWhileOutsourcing">
            Safeguard your intellectual property while outsourcing
          </div>
          {/* Button */}
          <div className="buttonStyle">Sign up for early access</div>
        </div>
      </div>

      {/* Section C */}
      <div style={{ display: "flex", height: "734px" }}>
        {/* C.1 */}
        <div
          style={{
            width: "60%",
            backgroundImage: "url(/assets/img/P1.png)",
            backgroundSize: "cover",
          }}
        ></div>

        {/* C.2 */}
        <div
          style={{
            width: "40%",
            background: "white",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div
            className="UnlockTheSecretsOfIntellectualProperty"
            style={{
              fontSize: 24,
              fontFamily: "Source Sans Pro",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Unlock the Secrets of Intellectual Property:
          </div>
          <div
            className="MasterTheArtOfProtectingYourIdeasBrandAndSoftwareInTodaySCompetitiveLandscape"
            style={{
              fontSize: 46,
              fontFamily: "Source Sans Pro",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Master the art of protecting your ideas, brand, and software in
            today's competitive landscape.
          </div>
          <div
            className="RegisterForTheLaunch"
            style={{
              fontSize: 24,
              fontFamily: "Source Sans Pro",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Register for the launch
          </div>
          <div className="Line1" style={{ border: "1px black solid" }}></div>
        </div>
      </div>

      {/* Section D */}
      <div
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          className="BeAmongTheFirstToSignUpAndGainACompetitiveEdgeInTheIpProtectionGame"
          style={{
            textAlign: "center",
            fontSize: 24,
            fontFamily: "Source Sans Pro",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Be among the first to sign up and gain a competitive edge in the IP
          protection game.
        </div>
        <div
          className="HelpUsShapeOurPlatformToFitYouByBecomingABetaTesterYouLlAlsoReceiveExclusiveContentInsiderUpdatesAndBePartOfACommunityRedefiningTheIpTheftAndSecurityIndustry"
          style={{
            textAlign: "center",
            fontSize: 46,
            fontFamily: "Source Sans Pro",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Help us shape our platform to fit you by becoming a beta tester -
          you'll also receive exclusive content, insider updates and be part of
          a community redefining the IP theft and security industry.
        </div>
        <div className="buttonStyle">Become a testing partner</div>
      </div>
    </div>
  );
}

export default App;
