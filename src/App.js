import React, { useState } from "react";
import logo from './assets/img/logo_transparent_white.png';
import "./App.css";

// Old Data

function App() {
  return (
    <div className="App">
      <div className="fixed top-0 left-0 w-full h-[70px] py-5 px-10 sm:px-24">
        <img src={logo} className="relative w-[104px] h-[27px]" alt="CUDE" />
      </div>

      <div className="flex items-end sm:pb-20 lg:items-center justify-end w-full h-full">
        <div className="MainBody flex flex-col justify-center gap-5 bg-white rounded-sm">
          <h3 className="MainHeading text-2xl sm:text-4xl">
            We are now live...
          </h3>
          <p className="MainInfo text-sm sm:text-lg">
            Join our testing partners today and gain early bird access to our solution for free.
          </p>
          <a className="MainInfo text-sm rounded-sm bg-[#0065FF] hover:bg-[#0065FF]/50 transition text-white p-2 text-center" href="https://prototype.thecude.com/">
            Register for free
          </a>
        </div>

        <a className="MainInfo text-white fixed left-0 bottom-0 w-full p-2 bg-[#0065FF] hover:bg-[#1e76fd] text-center transition" href="https://prototype.thecude.com/">
          Code Secure Ltd ©️ 2023 | 14766852
        </a>
      </div>
    </div>
  );
}

export default App;
