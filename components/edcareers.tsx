"use client";

import React from "react";

export default function CareerOpportunitiesDTE() {
  const careers = [
    {
    title: "Primary School Teacher",
    description:
      "Teach foundational subjects to learners at the primary level using effective teaching strategies.",
  },
  {
    title: "Early Childhood Education (ECE) Teacher",
    description:
      "Support the cognitive, emotional, and social development of young children in pre-primary settings.",
  },
  {
    title: "Secondary School Teacher (Assistant)",
    description:
      "Assist in teaching specific subjects at the secondary school level under supervision.",
  },
  {
    title: "Teaching Assistant",
    description:
      "Support lead teachers in classroom management, lesson preparation, and student support.",
  },
  {
    title: "Private Tutor",
    description:
      "Offer one-on-one or small-group academic support to learners outside the classroom setting.",
  },
  {
    title: "Education Program Facilitator",
    description:
      "Work with NGOs, churches, and community organizations to deliver educational programs and training.",
  },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Career Opportunities in DTE
        </h2>
     <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
  Graduates of the Diploma in Teacher Education are equipped with professional teaching skills,
  classroom management techniques, and learner-centered methodologies that open doors to rewarding
  careers in schools, educational institutions, and community development programs.
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
