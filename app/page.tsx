"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Card } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import image1 from "../public/image1.jpg"
import image2 from "../public/image1.jpg"
import image3 from "../public/image1.jpg"
import image4 from "../public/image1.jpg"
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
        backgroundImage: "url('/study-group-african-people.jpg')", 
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
    <AboutUs />
     <div className=" animate__animated animate__fadeIn animate__slower-3s h-56 sm:h-64 md:h-screen xl:h-screen 2xl:h-screen mt-1">
       
      <Carousel>
        <Image src= {image1} alt=".."/>
        <Image src= {image2} alt=".."/>
        <Image src= {image3} alt=".."/>
        <Image src= {image4} alt=".."/>
        
        
      </Carousel>
    
    </div>
    <SeniorManagement />
    <Departments />
    <StudentLife />
    <StudentCouncil />
    <CallToAction />
    </>
   
  );
}
