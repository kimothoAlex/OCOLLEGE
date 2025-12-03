"use client";

import Image from "next/image";
import logooca from "../public/logooca.jpeg";
import { Navbar } from "flowbite-react";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Header() {
  return (
    <Navbar
      className="bg-blue-500 dark:text-blue lg:w-full text-white shadow-lg"
      fluid
      rounded
    >
<Navbar.Brand className="flex items-center">
  <Image
    src={logooca}
    width={60}  
    height={60}
    alt="Logo"
    className="rounded-full sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
    priority
  />
  <span className="ml-3 self-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
    Orthodox College of Africa
  </span>
</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-2xl text-white" href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-2xl text-white" href="/aboutUs">
          About Us
        </Navbar.Link>
        <Dropdown label="Departments" color={'blue'} dismissOnClick={false}>
        <Navbar.Link className="text-xl mb-2 text-black" href="/ict">
          Department of ICT
        </Navbar.Link>
       <hr />
        <Navbar.Link className="text-xl mb-2 text-black" href="/business">
          Department of Business
        </Navbar.Link>
        <hr />
        <Navbar.Link className="text-xl mb-2 text-black" href="/education">
          Department of Education
        </Navbar.Link>
        <hr />
        <Navbar.Link className="text-xl mb-2 text-black" href="/social">
          Department of Social Work
        </Navbar.Link>
        <hr />
        <Navbar.Link className="text-xl mb-2 text-black" href="/fashion">
          Department of Fashion
        </Navbar.Link>
        <hr />
    </Dropdown>
        <Navbar.Link className="text-2xl text-white" href="/contact">
          Contact
        </Navbar.Link>
        
          
        
      </Navbar.Collapse>
    </Navbar>
  );
}
