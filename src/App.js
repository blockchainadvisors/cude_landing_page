import React, { useState } from "react";
import logo from './assets/img/logo_transparent_white.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="fixed top-0 left-0 w-full h-[70px] py-5 px-24">
        <img src={logo} className="relative w-max h-full" alt="CUDE" />
      </div>

      <div className="flex items-center justify-end w-full h-full">
        <div className="MainBody flex flex-col justify-center gap-5 bg-white rounded-sm py-10 px-24">
          <h3 className="MainHeading text-xl sm:text-4xl">
            We are now live...
          </h3>
          <p className="MainInfo text-sm sm:text-lg">
            Join our testing partners today<br/>and gain early bird access to our<br/>solution for free.
          </p>
          <a className="MainInfo text-sm rounded-sm bg-[#0065FF] hover:bg-[#0065FF]/50 transition text-white p-2 text-center" href="https://prototype.thecude.com/">
            Register for free
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
