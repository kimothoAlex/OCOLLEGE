"use client";

import React from "react";

export default function CareerOpportunitiesICT() {
  const careers = [
    {
      title: "Web Developer",
      description: "Design, build, and maintain websites and web applications.",
    },
    {
      title: "IT Support Specialist",
      description: "Provide technical assistance and support for hardware and software issues.",
    },
    {
      title: "Network Administrator",
      description: "Manage and maintain computer networks within organizations.",
    },
    {
      title: "Software Developer",
      description: "Create software solutions to meet user and business needs.",
    },
    {
      title: "Graphic Designer",
      description: "Create visual content using design software for digital and print media.",
    },
    {
      title: "Database Administrator",
      description: "Manage, secure, and organize data within databases.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Career Opportunities in ICT
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Graduates from the ICT Department are equipped with technical skills that open doors to
          numerous career paths in technology, business, and creative industries.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((career, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {career.title}
              </h3>
              <p className="text-gray-600">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
