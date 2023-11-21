import React from 'react'
import Logo from '../assets/img/logo_transparent_blue.png'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between fixed top-0 left-0 w-full px-10 py-[20px] z-[10] bg-[#edf3fe]">
        <img 
            className="h-5 w-auto"
            src={Logo} 
            alt="CUDE Logo" 
        />
        <ul className="flex gap-5 text-sm text-[#3B7FF2]">
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
    </div>
  )
}