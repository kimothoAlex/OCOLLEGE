import React from 'react'
import Image from 'next/image';
import EducationCourses from '@/components/edcourses';
import CareerOpportunitiesDTE from '@/components/edcareers';
const EducationPage = () => {
  return (
    <>  
    <section className="relative bg-green-900 text-white min-h-[70vh] flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0 h-full w-full">
    <Image
      src="/education.jpg" // Put this image in public folder
      alt="Department of Education"
      fill
      priority
      sizes="100vw"
      className="object-cover opacity-40"
    />
  </div>

  {/* Hero Content */}
  <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Department of Education
    </h1>

    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
      Empowering future educators with professional knowledge, teaching
      methodologies, and classroom management skills through our Diploma in
      Teacher Education — preparing them to shape the leaders of tomorrow.
    </p>

    {/* Call to Actions */}
    <div className="flex justify-center gap-4">
      <a
        href="/apply"
        className="bg-white text-green-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-md"
      >
        Apply Now
      </a>
    </div>
  </div>
</section>
    <EducationCourses />
    <CareerOpportunitiesDTE />
    </>
    

  )

}

export default EducationPage;