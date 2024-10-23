import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import logo from '../img/logo.jpg'; 

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        <div className="flex items-center">
          <img src={logo} alt="Your Logo" className="h-10 w-10" />
          <span className="ml-3 text-2xl font-semibold text-gray-800">Your App Name</span>
        </div>

        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="text-gray-700 hover:text-blue-600 transition">My App</Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition duration-150 ease-in-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-150 ease-in-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'} transition`}
                      >
                        Item 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'} transition`}
                      >
                        Item 2
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Explore</a>
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 transition"
            />
          </div>
          <button className="text-gray-700 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-2-2h-3m0-4l-2-2h-3m0-4h-4m10 10v-10h-4m-4 10v-4h-4" />
            </svg>
          </button>
          <button className="text-gray-700 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l18 0m-18 4l18 0m-18 4l18 0" />
            </svg>
          </button>
          <span className="inline-block bg-red-500 text-white rounded-full px-2 py-1 text-xs">79</span>
          <div className="relative">
            <img src="profile-image.jpg" alt="Profile" className="h-9 w-9 rounded-full border-2 border-gray-200" />
            <div className="absolute bottom-0 right-0 bg-white rounded-md shadow-lg">
              <span className="block px-2 py-2 text-sm text-gray-700">Profile Name</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition">Create User</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
