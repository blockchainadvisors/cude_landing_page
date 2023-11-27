import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import HeroSvg from './assets/svg/hero.svg';
import RoundedSvg from './assets/svg/rounded.svg';
import RobotSvg from './assets/svg/robot.svg';
// import PadlockSvg from './assets/svg/padlock.svg';
// import LockpadSvg from './assets/svg/lockpad.svg';
// import MoneySvg from './assets/svg/money.svg';
// import PythonSvg from './assets/svg/python.svg';
// import BusinessSvg from './assets/svg/business.svg';
// import CodeSvg from './assets/svg/code.svg';
// import FlexiblePaymentSvg from './assets/svg/flexible-payment.svg';
// import CudeSvg from './assets/svg/cude.svg';

import BlueSvg from './assets/svg/blue.svg';

// import Grid from "./components/Grid";
import Card from "./components/Card";
import Input from "./components/Input";

import { MonitorCheck, Receipt, Bot, TabletSmartphone, Wallet2, Instagram, Linkedin, MapIcon, MapPin, Phone, PhoneCall, Twitter, Puzzle, FolderLock } from "lucide-react";

function App() {
  const maxSize = 24;

  const features = [
    {
      image: <Puzzle size={maxSize} />,
      title: "Protected Collaboration",
      description: "Safely collaborate without compromising security."
    },
    {
      image: <FolderLock size={maxSize} />,
      title: "Controlled Access",
      description: "Determine who views and modifies your code."
    },
    {
      image: <FolderLock size={maxSize} />,
      title: "Safe & Automated Payments",
      description: "Secure milestone-driven payment methods."
    },
    {
      image: <Wallet2 size={maxSize} />,
      title: "Support for Top Languages",
      description: "Optimized for popular coding languages."
    },
    {
      image: <TabletSmartphone size={maxSize} />,
      title: "Business-Ready Tools",
      description: "Familiar, easy-to-use developer tools."
    },
    {
      image: <Bot size={maxSize} />,
      title: "Smart Assistance",
      description: "AI-guided advice for coding and project timelines."
    },
    {
      image: <Receipt size={maxSize} />,
      title: "Flexible Payment Options",
      description: "Choose between subscription or per-project billing."
    },
    {
      image: <MonitorCheck size={maxSize} />,
      title: "Intuitive Overview",
      description: "User-friendly dashboards for quick insights."
    }
  ];

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactForm = async () => {
    if (!firstname.length) {
      alert('Please fill out your firstname');
      return;
    }

    if (!lastname.length) {
      alert('Please fill out your lastname');
      return;
    }

    if (!email.length) {
      alert('Please fill out your email');
      return;
    }

    if (!message.length) {
      alert('Please enter a message');
      return;
    }

    try {
      const res = await fetch("https://api.thecude.com/mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            firstname,
            lastname,
            message
          })
        });

      if (res.ok) {
        alert('Your message was sent, you will be contacted soon')
      }

      setEmail('');
      setFirstname('');
      setLastname('');
      setMessage('');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="App">
      {/* <Grid /> */}
      <Navbar />

      <div className="mt-[80px] mb-10 relative bg-gradient-to-r from-[#3B7FF2]/10 to-[#EAC435]/1 grid grid-cols-1 lg:grid-cols-2 items-center justify-between pt-[60px] after:content[''] after:absolute after:-bottom-[60px] after:left-0 after:w-full after:h-[60px] after:bg-gradient-to-b after:from-[#3B7FF2]/10 after:to-transparent">
        <div className="w-full col-span-1 order-last lg:order-first z-[2]">
          <div className="pt-10 pl-10 w-full pr-10 lg:pr-[190px] col-span-2 lg:col-span-1 flex flex-col gap-3">
            <span className="font-bold">
              Discover CUDE:
            </span>

            <h1 className="text-[#3B7FF2]">
              Your Solution for Securing Software Intellectual Property
            </h1>

            <p>
              Welcome to the CUDE, a revolutionary B2B framework that is changing the way organizations protect their software intellectual property (IP). At CUDE, we are more than just a software security platform – we are a dynamic, forward-thinking team on a mission to redefine the landscape of IP security.
            </p>

            <a href="https://prototype.thecude.com" className="mt-5 bg-blue-600 hover:bg-blue-600/90 text-white text-sm rounded-sm py-2 px-10 self-start transition">
              Join the testing partners
            </a>
          </div>
        </div>

        <img className="col-span-1 z-[2] order-first lg:order-last" src={HeroSvg} alt="CUDE Hero" />
      </div>

      <div className="relative h-full w-full pr-20 z-[1] lg:py-32">
        <img className="absolute -top-[150px] left-0 -z-[1] object-center object-cover h-full w-full lg:h-auto lg:w-auto" src={RoundedSvg} alt="RoundedSVG" />
        <div className="flex flex-col px-10 lg:px-0 lg:flex-row items-center gap-10">
          <img src={RobotSvg} className="w-full w-[auto]" alt="RobotSVG" />
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-[#3B7FF2]">Unveiling a Game-Changing Innovation</h1>
            
            <p>Our journey began with a comprehensive analysis of market trends, revealing that 35% of respondents expressed fear of losing their intellectual property, and 18% planned to insource due to IP concerns. These insights led us to develop a solution that offers both security and efficiency for businesses looking to outsource code development while protecting their valuable IP. </p>
            
            <a
              className="bg-blue-600 hover:bg-blue-600/90 text-white text-sm rounded-sm py-2 px-10 lg:px-24 transition self-start"
              href="#contact"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div id="features" className="flex flex-col relative z-[1] px-10 py-10 lg:py-20 bg-white mt-24">
        <div>
          <span className="text-lg font-semibold">Product Features</span>
          <h1>Built with you in mind.</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 justify-between gap-20 py-5">
            {
              features.map((feature, k) => (
                <Card
                  key={k}
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              ))
            }
        </div>

        <a
          className="mt-5 bg-blue-600 hover:bg-blue-600/90 text-white text-sm rounded-sm py-2 px-24 transition self-center"
          href="https://prototype.thecude.com"
        >
          Join to test
        </a>
      </div>

      <div id="contact" className="relative w-full h-[600px] bg-blue-600 lg:bg-transparent">
        <img src={BlueSvg} className="hidden lg:block absolute top-0 left-0 object-cover object-center h-full w-full -z-[1]" alt="BlueSVG" />
        <div className="py-10 lg:pt-[175px] px-10 text-white bg-blue-600 md:bg-transparent">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
            <div className="w-full flex flex-col gap-3">
              <h3 className="text-[#EEFF2B]">Get in touch</h3>
              <p className="text-sm">The CUDE team comprises experienced professionals from various domains, including software development, blockchain, cybersecurity, and business development. Our combined expertise ensures that the CUDE platform aligns with market demands and excels in technical excellence. Contact us today to transform your business!</p>

              <div className="h-[1px] w-[15rem] bg-[#FFE06B]"></div>

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
                <Input placeholder="First name" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                <Input placeholder="Last name" onChange={(e) => setLastname(e.target.value)} value={lastname} />
              </div>

              <Input placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
              <Input type="textarea" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message} />

              <button
                className="bg-[#EEFF2B] hover:bg-[#EEFF2B]/90 text-[#2959A9] text-xs rounded-sm py-2 px-10 self-start transition"
                onClick={handleContactForm}
              >
                Reach out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-2 lg:gap-0 justify-between text-sm p-6 footer-messy">
        <div className="flex self-end lg:self-start gap-5">
          <a href="https://www.linkedin.com/company/thecude" className="hover:text-blue-600 transition">
            <Instagram size={16} />
          </a>
          <a href="https://www.x.com/thecude_team" className="hover:text-blue-600 transition">
            <Twitter size={16} />
          </a>
          <a href="https://www.linkedin.com/company/thecude" className="hover:text-blue-600 transition">
            <Linkedin size={16} />
          </a>
        </div>
        <div>
          Copyright ©️ 2023 All rights reserved. / Privacy / Terms of Use / Cookie preferences / Do not sell my personal information.
        </div>
      </div>

    </div>
  );
}

export default App;
