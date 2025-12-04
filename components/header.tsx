"use client";

import Image from "next/image";
import logooca from "../public/logooca.jpeg";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Dropdown, DropdownItem } from "flowbite-react";
import DepartmentsDropdown from "./DepartmentDropdown";

export default function Header() {
  return (
     <Navbar
      fluid
      className="bg-blue-600 text-white shadow-lg sticky top-0 z-50 px-4 md:px-10"
    >

      {/* LOGO + NAME */}
      <Navbar.Brand href="/" className="flex items-center gap-3">
        <Image
          src={logooca}
          width={60}
          height={60}
          alt="Logo"
          className="rounded-full md:w-16 md:h-16 lg:w-20 lg:h-20"
          priority
        />
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
          Orthodox College of Africa & TTC
        </span>
      </Navbar.Brand>

      {/* Mobile Toggle Button */}
      <Navbar.Toggle />

      {/* Links */}
      <Navbar.Collapse className="mt-3 md:mt-0">

        <Navbar.Link
          className="text-white text-lg md:text-xl over:text-yellow-300"
          href="/"
        >
          Home
        </Navbar.Link>

        <Navbar.Link
          className="text-white text-lg md:text-xl hover:text-yellow-300"
          href="aboutUs"
        >
          About Us
        </Navbar.Link>
        {/* <Navbar.Link
          className="text-white text-lg md:text-xl hover:text-yellow-300"
          href="/contact"
        >
          Contact
        </Navbar.Link> */}
        {/* DROPDOWN */}
        <div className="relative group">
              {/* Button */}
              <button
                className="flex items-center gap-2 text-white text-lg md:text-xl hover:text-yellow-300 transition"
              >
                Departments <ChevronDown size={18} />
              </button>
        
              {/* Dropdown */}
              <div
                className="absolute left-0 top-full mt-3 w-80 bg-white rounded-xl shadow-xl p-4 grid grid-cols-1 gap-3 
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <Link href="/education" className="block p-3 rounded-lg hover:bg-blue-50">
                  <h3 className="font-semibold text-blue-600">Education Department</h3>
                  <p className="text-sm text-gray-500">Teacher training & pedagogy</p>
                </Link>
                <Link href="/ict" className="block p-3 rounded-lg hover:bg-blue-50">
                  <h3 className="font-semibold text-blue-600">ICT Department</h3>
                  <p className="text-sm text-gray-500">Programming, Networking & AI</p>
                </Link>
        
                <Link href="/business" className="block p-3 rounded-lg hover:bg-blue-50">
                  <h3 className="font-semibold text-blue-600">Business Department</h3>
                  <p className="text-sm text-gray-500">Accounting & Entrepreneurship</p>
                </Link>
        
                
        
                <Link href="/social" className="block p-3 rounded-lg hover:bg-blue-50">
                  <h3 className="font-semibold text-blue-600">Social Work</h3>
                  <p className="text-sm text-gray-500">Community & welfare studies</p>
                </Link>
        
                <Link href="/fashion" className="block p-3 rounded-lg hover:bg-blue-50">
                  <h3 className="font-semibold text-blue-600">Fashion & Design</h3>
                  <p className="text-sm text-gray-500">Design & garment making</p>
                </Link>
        
              </div>
            </div>
        

      </Navbar.Collapse>

    </Navbar>
  );
}
