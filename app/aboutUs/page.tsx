import React from 'react'

import Image from "next/image";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";


export default function AboutUsPage() {
  return (
    <section className="bg-white text-gray-800 w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-blue-900">
        <Image
          src="/reception2.jpeg"
          alt="Orthodox College of Africa"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            About Orthodox College of Africa & TTC
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            A center of excellence in education, faith, and leadership in Orthodox Africa.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="relative h-80 lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/reception1.jpeg"
            alt="Campus"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-base sm:text-lg md:text-xl font-serif leading-relaxed">
            The Orthodox College of Africa is an esteemed project of the St. Clement of Alexandria
            Philanthropic Education Center of the Church of Alexandria. Situated in the heart of
            Kenya, within the serene grounds of the Orthodox Archbishopric of Kenya, our college
            stands as a beacon of hope and excellence in Orthodox Africa.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-serif leading-relaxed">
            Since welcoming our inaugural class in January 2003, we have been dedicated to nurturing
            future educators through a rich blend of academic rigor, spiritual grounding, and
            professional development. We are proud to offer post-secondary teacher training programs
            recognized and registered by the Ministry of Education, Science, and Technology of Kenya.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-serif leading-relaxed">
            Established with the aim of providing quality education rooted in Orthodox Christian
            values, Orthodox College of Africa has grown into a leading institution in the region,
            offering diverse academic and vocational programs to meet the needs of a modern society.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-serif leading-relaxed">
            Our campus is more than just a place of learning — it is a community where students grow
            academically, spiritually, and socially. Through discipline, compassion, and excellence,
            we prepare our learners to serve as capable educators, leaders, and responsible members
            of society.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">

  {/* Mission */}
  <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-xl p-8 text-center text-white hover:scale-105 transition duration-300">
    <LightBulbIcon className="w-14 h-14 text-yellow-400 mx-auto" />
    <h3 className="text-2xl font-bold mt-4">Our Mission</h3>
    <p className="text-base sm:text-lg mt-4 leading-relaxed">
      To provide holistic, Christ-centered education through quality training,
      research, and innovation, equipping students with knowledge, skills, and
      strong moral foundations for service to God, the Church, and society.
    </p>
  </div>

  {/* Vision */}
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-center text-white hover:scale-105 transition duration-300">
    <EyeIcon className="w-14 h-14 text-blue-400 mx-auto" />
    <h3 className="text-2xl font-bold mt-4">Our Vision</h3>
    <p className="text-base sm:text-lg mt-4 leading-relaxed">
      To be a leading Orthodox institution of excellence in Africa, recognized
      for academic integrity, spiritual growth, and the development of
      transformational leaders who positively impact the world.
    </p>
  </div>

  {/* Core Values */}
  <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 text-center text-white hover:scale-105 transition duration-300">
    <HeartIcon className="w-14 h-14 text-red-400 mx-auto" />
    <h3 className="text-2xl font-bold mt-4">Our Core Values</h3>
    <ul className="mt-4 space-y-2 text-base sm:text-lg text-left mx-auto max-w-xs">
      <li>• Faith in God & Orthodox Christian teachings</li>
      <li>• Academic Excellence</li>
      <li>• Integrity & Honesty</li>
      <li>• Discipline & Responsibility</li>
      <li>• Service to Community</li>
      <li>• Unity & Respect for All</li>
    </ul>
  </div>

</div>

    </section>
  );
}
