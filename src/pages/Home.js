import React from "react";

import HeroSvg from '../assets/svg/hero.svg';
import RoundedSvg from '../assets/svg/rounded.svg';
import RobotSvg from '../assets/svg/robot.svg';

// Icons
import PuzzleSvg from '../assets/svg-icons/puzzle.svg';
import PadlockSvg from '../assets/svg-icons/padlock.svg';
import ToolsSvg from '../assets/svg-icons/tools.svg';
import PaymentsSvg from '../assets/svg-icons/payments.svg';
import LanguagesSvg from '../assets/svg-icons/languages.svg';
import BotSvg from '../assets/svg-icons/bot.svg';
import PayMethodsSvg from '../assets/svg-icons/payopts.svg';
import PlatformSvg from '../assets/svg-icons/platform.svg';
// End of Icons

import Card from '../components/Card';

function Page() {
  const maxSize = 42;

  const features = [
    {
      image: <img src={PuzzleSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Protected Collaboration",
      description: "Safely collaborate without compromising security.",
      splitTitleOnXs: false
    },
    {
      image: <img src={PadlockSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Controlled Access",
      description: "Determine who views and modifies your code.",
      splitTitleOnXs: true
    },
    {
      image: <img src={ToolsSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Business-Ready Tools",
      description: "Familiar, easy-to-use developer tools.",
      splitTitleOnXs: true
    },
    {
      image: <img src={PaymentsSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Safe & Automated Payments",
      description: "Secure milestone-driven payment methods.",
      splitTitleOnXs: false
    },
    {
      image: <img src={LanguagesSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Support for Top Languages",
      description: "Optimized for popular coding languages.",
      splitTitleOnXs: false
    },
    {
      image: <img src={PayMethodsSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Flexible Payment Options",
      description: "Choose between subscription or per-project billing.",
      splitTitleOnXs: false
    },
    {
      image: <img src={BotSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Smart Assistance",
      description: "AI-guided advice for coding and project timelines.",
      splitTitleOnXs: false
    },
    {
      image: <img src={PlatformSvg} width={maxSize} height="auto" alt="IconSVG" />,
      title: "Intuitive Overview",
      description: "User-friendly dashboards for quick insights.",
      splitTitleOnXs: false
    }
  ];

  return (
    <div>
      <div className="mt-[115px] md:mt-[81px] lg:mt-[80px] mb-10 md:mt-0 relative bg-gradient-to-r from-[#3B7FF2]/10 to-[#EAC435]/1 grid grid-cols-1 md:grid-cols-2 items-center justify-between pt-[60px] after:content[''] after:absolute after:-bottom-[60px] after:left-0 after:w-full after:h-[60px] after:bg-gradient-to-b after:from-[#3B7FF2]/10 after:to-transparent">
        <div className="w-full col-span-1 order-last md:order-first z-[2]">
          <div className="pt-10 pl-5 pr-5 md:pl-10 w-full md:pr-[20px] lg:pr-[190px] col-span-2 md:col-span-1 flex flex-col gap-3">
            <span className="font-bold">
              Discover CUDE:
            </span>

            <h1 className="text-[#3B7FF2]">
              Your Solution for Securing Software Intellectual Property
            </h1>

            <p>
              Welcome to the CUDE, a revolutionary B2B framework that is changing the way organizations protect their software intellectual property (IP). At CUDE, we are more than just a software security platform – we are a dynamic, forward-thinking team on a mission to redefine the landscape of IP security.
            </p>

            <a href="https://prototype.thecude.com" className="mt-0 lg:mt-5 bg-blue-600 hover:bg-blue-600/90 text-white text-sm rounded-sm py-2 px-10 self-start transition" target="_blank" rel="noreferrer">
              Join the testing partners
            </a>
          </div>
        </div>

        <img className="col-span-1 z-[2] order-first md:order-last" src={HeroSvg} alt="CUDE Hero" />
      </div>

      <div className="relative h-full w-full pr-0 lg:pr-20 z-[1] pb-10 lg:pb-0 lg:py-0 bg-[#d9e7fc] lg:bg-transparent">
        <img className="absolute -top-[90px] md:-top-[40px] lg:-top-[250px] left-0 -z-[1] object-center object-cover h-full w-full lg:h-auto lg:w-auto" src={RoundedSvg} alt="RoundedSVG" />
        <div className="flex flex-col px-5 md:px-0 md:flex-row items-center gap-10">
          <img src={RobotSvg} className="h-full w-[auto] md:w-[50%] lg:w-[auto]" alt="RobotSVG" />
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-[#3B7FF2] pr-10 md:pr-0">Unveiling a Game-Changing Innovation</h1>
            
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

      <div id="features" className="flex flex-col relative z-[1] px-5 lg:px-10 py-10 lg:py-20 bg-white lg:mt-24">
        <div>
          <span className="text-lg font-semibold">Product Features</span>
          <h1>Built with you in mind.</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 justify-between gap-5 lg:gap-20 py-5 px-5">
            {
              features.map((feature, k) => (
                <Card
                  key={k}
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                  splitTitleOnXs={feature.splitTitleOnXs}
                />
              ))
            }
        </div>

        <a
          className="mt-5 bg-blue-600 hover:bg-blue-600/90 text-white text-sm rounded-sm py-2 px-24 transition self-center lg:self-start"
          href="https://prototype.thecude.com"
          target="_blank" rel="noreferrer"
        >
          Join to test
        </a>
      </div>
    </div>
  );
}

export default Page;