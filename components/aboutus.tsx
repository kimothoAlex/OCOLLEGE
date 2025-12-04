'use client'
import Image from "next/image";
import { LightBulbIcon, EyeIcon, HeartIcon } from "@heroicons/react/24/solid";
import React from 'react'
import "animate.css"
import bishop1 from "../public/bishop1.jpg"
import ScrollAnimate from "./scrollAnimate";
export default function AboutUs () {

  return (
     <div id="aboutus" className="m-4 sm:m-10">
      <div className="bg-blue-600 text-gray-200 w-full rounded-lg shadow-lg p-6 sm:p-10">
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          About Us
        </h1>

        {/* History Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif m-4">
          The History of Orthodox College Of Africa
        </h2>
        <hr />

        <div className="m-3 ">
         
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
              The Orthodox College of Africa is an esteemed project of the St. Clement of Alexandria
              Philanthropic Education Center of the Church of Alexandria. Situated in the heart of Kenya,
              within the serene grounds of the Orthodox Archbishopric of Kenya, our college stands as a
              beacon of hope and excellence in Orthodox Africa.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
              Since welcoming our inaugural class in January 2003, we have been dedicated to nurturing
              future educators with a robust blend of academic rigor and spiritual grounding. As the first
              institution of its kind in Orthodox Africa, we are proud to offer post-secondary teacher
              training that is recognized and registered by the Ministry of Education, Science, and
              Technology of Kenya.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
              The Orthodox College of Africa was established in 2010 with the aim of providing quality
              education rooted in Orthodox Christian values. Over the years, we have grown to become a
              leading institution in the region, offering a wide range of programs that cater to the
              diverse needs of our students.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
              Our college is not just an educational institution; it is a community where students are
              encouraged to grow both academically and spiritually. We believe in the holistic
              development of our students, preparing them to be not only excellent educators but also
              responsible and compassionate members of society.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Mission */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <LightBulbIcon className="w-12 h-12 text-yellow-400 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4">Our Mission</h3>
            <p className="text-sm sm:text-lg mt-2">
              To provide training, research, and participate in national education planning and policy.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <EyeIcon className="w-12 h-12 text-blue-400 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4">Our Vision</h3>
            <p className="text-sm sm:text-lg mt-2">
              To be a center of excellence in education, recognized for academic integrity, spiritual
              growth, and community service.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-center">
            <HeartIcon className="w-12 h-12 text-red-400 mx-auto" />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4">Our Core Values</h3>
            <ul className="mt-2 space-y-1 text-sm sm:text-lg">
              <li>Transparency</li>
              <li>Innovation</li>
              <li>Professionalism</li>
              <li>Accountability</li>
              <li>Integrity</li>
            </ul>
          </div>
        </div>
       <ScrollAnimate children={undefined} />
      </div>
       
    </div>

  );
}

