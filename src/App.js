import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import HeroSvg from './assets/svg/hero.svg';
import RoundedSvg from './assets/svg/rounded.svg';
import RobotSvg from './assets/svg/robot.svg';
import PadlockSvg from './assets/svg/padlock.svg';
import LockpadSvg from './assets/svg/lockpad.svg';
import MoneySvg from './assets/svg/money.svg';
import PythonSvg from './assets/svg/python.svg';
import BusinessSvg from './assets/svg/business.svg';
import CodeSvg from './assets/svg/code.svg';
import FlexiblePaymentSvg from './assets/svg/flexible-payment.svg';
import CudeSvg from './assets/svg/cude.svg';

import BlueSvg from './assets/svg/blue.svg';

import Grid from "./components/Grid";
import Card from "./components/Card";
import Input from "./components/Input";

import { Instagram, Linkedin, MapIcon, MapPin, Phone, PhoneCall, Twitter } from "lucide-react";

function App() {
  const features = {
    left: [
      {
        image: PadlockSvg,
        title: "Protected Collaboration",
        description: "Safely collaborate without compromising security."
      },
      {
        image: LockpadSvg,
        title: "Controlled Access",
        description: "Determine who views and modifies your code."
      },
      {
        image: MoneySvg,
        title: "Safe & Automated Payments",
        description: "Secure milestone-driven payment methods."
      },
      {
        image: PythonSvg,
        title: "Support for Top Languages",
        description: "Optimized for popular coding languages."
      }
    ],
    right: [
      {
        image: BusinessSvg,
        title: "Business-Ready Tools",
        description: "Familiar, easy-to-use developer tools."
      },
      {
        image: CodeSvg,
        title: "Smart Assistance",
        description: "AI-guided advice for coding and project timelines."
      },
      {
        image: FlexiblePaymentSvg,
        title: "Flexible Payment Options",
        description: "Choose between subscription or per-project billing."
      },
      {
        image: CudeSvg,
        title: "Intuitive Overview",
        description: "User-friendly dashboards for quick insights."
      }
    ]
  }

  return (
    <div className="App overflow-x-hidden">
      <Grid />
      <Navbar />

      <div className="relative bg-gradient-to-r from-[#3B7FF2]/10 to-[#EAC435]/1 grid grid-cols-2 items-center justify-between pt-[60px] after:content[''] after:absolute after:-bottom-[60px] after:left-0 after:w-full after:h-[60px] after:bg-gradient-to-b after:from-[#3B7FF2]/10 after:to-transparent">
        <div className="w-full col-span-1">
          <div className="pl-10 w-full pr-[120px] col-span-1 flex flex-col gap-3">
            <span className="font-bold">
              Discover CUDE:
            </span>

            <h1 className="text-[#3B7FF2]">
              Your Solution for Securing Software Intellectual Property
            </h1>

            <p>
              Welcome to the CUDE, a revolutionary B2B framework that is changing the way organizations protect their software intellectual property (IP). At CUDE, we are more than just a software security platform – we are a dynamic, forward-thinking team on a mission to redefine the landscape of IP security.
            </p>
          </div>
        </div>

        <img className="col-span-1 z-[2]" src={HeroSvg} alt="CUDE Hero" />
      </div>

      <div className="relative w-full h-full pr-10 z-[1] py-32">
        <img className="absolute -top-[100px] left-0 -z-[1]" src={RoundedSvg} alt="RoundedSVG" />
        <div className="flex items-center gap-20">
          <img src={RobotSvg} className="w-full w-[auto]" alt="RobotSVG" />
          <div className="w-full flex flex-col">
            <h3 className="text-[#3B7FF2]">Unveiling a Game-Changing Innovation</h3>
            <p>Our journey began with a comprehensive analysis of market trends, revealing that 35% of respondents expressed fear of losing their intellectual property, and 18% planned to insource due to IP concerns. These insights led us to develop a solution that offers both security and efficiency for businesses looking to outsource code development while protecting their valuable IP. </p>
          </div>
        </div>
      </div>

      <div id="features" className="relative w-full h-full z-[1]">
        <div className="px-10 z-[1] py-20">
          <div>
            <span className="text-sm">Product Features</span>
            <h3>Built with you in mind.</h3>
          </div>

          <div className="flex justify-between gap-20 py-5">
            <div className="flex flex-col gap-5 w-full">
              {
                features.left.map((feature, k) => (
                  <Card
                    key={k}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                  />
                ))
              }
            </div>
            <div className="flex flex-col gap-5 w-full -mt-10">
              {
                features.right.map((feature, k) => (
                  <Card
                    key={k}
                    title={feature.title}
                    description={feature.description}
                    image={feature.image}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <div id="contact" className="relative w-full h-[80%]">
          <img src={BlueSvg} className="absolute top-0 object-cover object-center h-full w-full left-0 -z-[1]" alt="BlueSVG" />
          <div className="pt-[175px] px-10 text-white">
            <div className="flex items-center gap-32">
              <div className="w-full flex flex-col gap-3">
                <h3 className="text-[#EEFF2B]">Get in touch</h3>
                <p className="text-sm">The CUDE team comprises experienced professionals from various domains, including software development, blockchain, cybersecurity, and business development. Our combined expertise ensures that the CUDE platform aligns with market demands and excels in technical excellence. Contact us today to transform your business!</p>

                <div className="h-[1px] w-[15rem] bg-white"></div>

                <div className="text-sm flex items-center gap-3">
                  <MapPin />
                  <span>STEAMhouse, Belmont Row, Birmingham, B4 7RQ</span>
                </div>

                <div className="text-sm flex items-center gap-3">
                  <Phone />
                  <span>+44 7900122182</span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-5">
                <div className="flex gap-5">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </div>
                <Input placeholder="Email address" />
                <Input type="textarea" placeholder="Message" />

                <button className="bg-[#EEFF2B] hover:bg-[#EEFF2B]/90 text-[#2959A9] text-xs rounded-sm py-2 px-10 self-start transition">Reach out</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-sm p-6">
          <div className="flex gap-5">
            <a href="/">
              <Instagram size={16} />
            </a>
            <a href="/">
              <Twitter size={16} />
            </a>
            <a href="/">
              <Linkedin size={16} />
            </a>
          </div>
          <div>
            Copyright ©️ 2023 All rights reserved. / Privacy / Terms of Use / Cookie preferences / Do not sell my personal information.
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
