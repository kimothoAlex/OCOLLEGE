'use client';

import React from 'react';
import Image from 'next/image';
import Courses from '@/components/social';
import CallToAction from '@/components/callToAction';
import CareerOpportunitiesSocial from '@/components/socialcareers';
const FashionPage = () => {
  
  return (
    <>
    <section className="relative bg-blue-900 text-white min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0  h-full w-full">
        <Image
          src="/social.jpeg" // Put this image in public/images
          alt="social work Department"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Department of Social Work
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
         Graduates from the Social Work Department are equipped with practical skills and compassionate insight to serve individuals, families, and communities.
        </p>

        {/* Call to Actions */}
        <div className="flex justify-center gap-4">
          {/* <a
            href="#courses"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            Explore Courses
          </a> */}
          <a
            href="/apply"
            className="bg-white text-blue-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            Apply Now
          </a>
        </div>
      </div>
      
    </section>
    <Courses />
    <CareerOpportunitiesSocial />
    <CallToAction />
    </>
    
  );
};

export default FashionPage;
