import React from 'react'
import studyImage from "../public/study-group-african-people.jpg"
import Image from 'next/image';
import Link from 'next/link';
const CallToAction = () => {
  return (
 <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${studyImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold font-serif">
          Shape Your Future, Serve with Excellence <br /> Enroll at OCA Today!
        </h1>

        <p className="text-lg md:text-2xl font-serif mt-6 max-w-4xl">
          Join the Orthodox College of Africa and embark on a transformative educational journey. 
          Our programs are designed to equip you with the skills and knowledge needed to excel in 
          your career while upholding the values of our Orthodox Christian faith.
        </p>

        <p className="text-lg md:text-2xl font-serif mt-6 max-w-4xl">
          Whether you aspire to be an educator, a leader in your community, or a professional in 
          various fields, OCA provides the foundation you need to succeed. Our dedicated faculty, 
          state-of-the-art facilities, and supportive community will guide you every step of the way.
        </p>

        <p className="text-lg md:text-2xl font-serif mt-6 max-w-3xl">
          Join us in our mission to provide quality education rooted in Orthodox Christian values. 
          Empower yourself with the knowledge and skills to make a positive impact in the world.
        </p>

        <p className="mt-6 text-xl font-semibold">📞 Call Now: 0714268723</p>

        <Link href={"/apply"} className="bg-white text-blue-900 font-bold px-8 py-4 rounded-lg mt-8 hover:bg-blue-200 transition duration-300">
          Apply Now
        </Link>
      </div>
    </section>

  )
}

export default CallToAction