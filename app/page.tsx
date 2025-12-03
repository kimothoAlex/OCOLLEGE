"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import image1 from "../public/image1.jpg"
import aerial1 from "../public/aerial1.jpeg"
import aerial2 from "../public/aerial2.jpeg"
import aerial3 from "../public/aerial3.jpeg"
import reception1 from "../public/reception1.jpeg"
import reception2 from "../public/reception2.jpeg"
import mission from "../public/mission.jpeg"
import corridor1 from "../public/corridor1.jpeg"
import corridor2 from "../public/corridor2.jpeg"
import library from "../public/library.jpeg"
import corridor3 from "../public/corridor3.jpeg"
import corridor4 from "../public/corridor4.jpeg"
import lib1 from "../public/lib1.jpeg"
import Header from "@/components/header";
import AboutUs from "@/components/aboutus";
import Departments from "@/components/departments";
import CallToAction from "@/components/callToAction";
import ScrollAnimate from "../components/scrollAnimate"
import StudentLife from "@/components/student"
import StudentCouncil from "@/components/council"
import SeniorManagement from "@/components/seniorManagement";

import "animate.css"
export default function Home() {
  return (
    <>
     <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/reception2.jpeg')", 
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      
      <ScrollAnimate animation="animate__fadeInUp">
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
       
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Orthodox College of Africa
        </h1>

      
        <p className="mt-4 text-lg md:text-xl font-semibold text-yellow-300">
          Accredited by the Kenya National Examinations Council (KNEC) & Official Exam Centre
        </p>

        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-200">
          Providing quality education in Diploma in Teacher Education (DTE), ICT, Business, and Vocational Skills to empower the next generation.
        </p>

        
        <div className="mt-6">
          <a
            href="#Departments"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-300 transition"
          >
            Explore Our Courses
          </a>
        </div>
      </div>
      </ScrollAnimate>
    </section>
    <div className=" animate__animated animate__fadeIn animate__slower-3s h-56 sm:h-64 md:h-screen xl:h-screen 2xl:h-screen mt-1">
       
      <Carousel>
        <Image src= {aerial1} alt=".."/>
        <Image src= {aerial2} alt=".."/>
        <Image src= {aerial3} alt=".."/>
        <Image src= {reception1} alt=".."/>
        <Image src= {reception2} alt=".."/>
        <Image src= {corridor1} alt=".."/>
        <Image src= {corridor2} alt=".."/>
        <Image src= {corridor3} alt=".."/>
        <Image src= {corridor4} alt=".."/>
        <Image src= {lib1} alt=".."/>
        
        
      </Carousel>
    
    </div>
    <AboutUs />
     
    <SeniorManagement />
    <Departments />
    <StudentLife />
    <StudentCouncil />
    <CallToAction />
    </>
   
  );
}
