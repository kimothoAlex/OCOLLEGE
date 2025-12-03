"use client";

import React from "react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">
          Admissions at Orthodox College of Africa
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12">
          Join a vibrant community of learners and begin your journey toward a brighter future.  
          Orthodox College of Africa is accredited by KNEC and is an official examination centre.
        </p>

        {/* Admission Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Step 1: Choose Your Program</h2>
            <p className="text-gray-700">
              Explore our departments and select the program that matches your career goals. We offer diploma and certificate courses in ICT, Business, Social Work, Fashion & Design, Theological Studies, and Education.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Step 2: Check Requirements</h2>
            <p className="text-gray-700">
              Review the minimum qualifications for each course. Most certificate programs require a KCSE mean grade of D (plain) and above, while diploma programs require C- and above.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Step 3: Submit Application</h2>
            <p className="text-gray-700">
              Fill out our application form online or visit our admissions office. Remember to attach copies of your KCSE results, ID/birth certificate, and 2 passport photos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Step 4: Pay Admission Fees</h2>
            <p className="text-gray-700">
              Once admitted, you will receive a fee structure. Payments can be made via bank deposit, M-Pesa, or directly at the school’s accounts office.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Apply?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Take the first step towards your future today. Applications are open all year round.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
