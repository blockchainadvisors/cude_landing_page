import React, { useState } from 'react'
import Logo from '../assets/img/logo_transparent_blue.png'
import { Building, Home, ListChecks, MailQuestion, Menu, XCircle } from 'lucide-react'

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  return (
    <div className="flex items-center justify-between fixed top-0 left-0 w-full px-10 py-[20px] z-[10] bg-[#edf3fe]">
      <img
        className="h-5 w-auto"
        src={Logo}
        alt="CUDE Logo"
      />

      <ul className="hidden lg:flex gap-5 text-sm text-[#3B7FF2]">
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

      <div className="block lg:hidden">
        <button className='outline-none hover:text-blue-600 transition' onClick={() => setActive(prev => !prev)}>
          <Menu size={16} />
        </button>
      </div>

      <div className={`${isActive ? 'fixed' : 'hidden'} top-0 left-0 w-full h-full bg-white text-black z-50`}>
        <button className='absolute top-5 right-5 hover:text-blue-600' onClick={() => setActive(prev => !prev)}>
          <XCircle size={24} />
        </button>

        <ul className="mt-10 flex flex-col gap-5 p-5">
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