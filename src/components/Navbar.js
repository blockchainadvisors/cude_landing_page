import React, { useState, useEffect, useRef } from 'react'
import Logo from '../assets/img/logo_transparent_blue.png'
import { Building, Home, ListChecks, MailQuestion, Menu, XCircle } from 'lucide-react'
import { useWindowSize } from "@uidotdev/usehooks";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);
  const elementRef = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    const handleTransitionEnd = () => {
      setTransitionComplete(true);
      setTimeout(() => {
        setTransitionComplete(false);
      }, 1000)
    };

    if (elementRef.current) {
      window.addEventListener('scroll', handleScroll);
      elementRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        elementRef.current.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [elementRef]);

  return (
    <div className={`fixed top-0 left-0 w-full px-5 lg:px-10 py-[20px] z-[10] bg-white`}>
      <div className="flex items-center justify-between">
        <img
          className="h-5 w-auto"
          src={Logo}
          alt="CUDE Logo"
        />

        <ul className="hidden font-semibold md:flex gap-5 text-sm text-[#3B7FF2]">
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="#features">
              Features
            </a>
          </li>
          <li>
            <a href="#contact">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="block md:hidden">
          <button className='outline-none hover:text-blue-600 transition' onClick={() => setActive(prev => !prev)}>
            <Menu size={16} />
          </button>
        </div>
      </div>

      <div className={`flex flex-col items-center justify-center gap-3 custom-transition`} style={{ marginTop: scrolled ? '-200px' : (size.width <= 767 ? '20px' : '0px') }} ref={elementRef}>
        <h3 className='fancy-header text-center'>
          Why wait? Join our testing partners now
        </h3>
        <a
          className="bg-blue-600 hover:bg-blue-600/90 text-white text-sm rounded-sm py-2 px-10 lg:px-24 transition"
          href="https://prototype.thecude.com"
        >
          Join the testing partners
        </a>
      </div>

      <div className='pb-[50px] md:pb-[95px]' style={{ display: scrolled ? 'block' : 'none' }}>&nbsp;</div>

      <div className={`${isActive ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-white text-black z-50`}>
        <button className='absolute top-5 right-5 hover:text-blue-600' onClick={() => setActive(prev => !prev)}>
          <XCircle size={24} />
        </button>

        <ul className="font-semibold mt-10 flex flex-col gap-5 p-5">
          <li>
            <a className="flex items-center gap-2 hover:text-blue-600 transition" href="/" onClick={(e) => setActive(false)}>
              <Home size={16} />
              Home
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#features" onClick={(e) => setActive(false)}>
              <ListChecks size={16} />
              Features
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#contact" onClick={(e) => setActive(false)}>
              <Building size={16} />
              About Us
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2 hover:text-blue-600 transition" href="#contact" onClick={(e) => setActive(false)}>
              <MailQuestion size={16} />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}