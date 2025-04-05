'use client'; // Client component for interactivity

import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 flex justify-between z-10">
      <div className="text-xl font-bold"></div>
      <div className="space-x-4">
        <Link to="home" smooth={true} className="hover:text-gray-300 cursor-pointer">Home</Link>
        <Link to="about" smooth={true} className="hover:text-gray-300 cursor-pointer">About</Link>
        <Link to="projects" smooth={true} className="hover:text-gray-300 cursor-pointer">Projects</Link>
        <Link to="contact" smooth={true} className="hover:text-gray-300 cursor-pointer">Contact</Link>
      </div>
    </nav>
  );
}