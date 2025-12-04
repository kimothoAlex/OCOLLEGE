"use client";

import React from "react";

export default function CareerOpportunitiesBUS() {
  const careers = [
    {
    title: "Business Administrator",
    description: "Oversee daily operations, manage resources, and ensure smooth running of an organization.",
  },
  {
    title: "Entrepreneur",
    description: "Start and manage your own business, turning ideas into profitable ventures.",
  },
  {
    title: "Marketing Officer",
    description: "Promote products and services, conduct market research, and develop marketing strategies.",
  },
  {
    title: "Sales Representative",
    description: "Build customer relationships, present products, and drive company sales growth.",
  },
  {
    title: "Accounts Clerk",
    description: "Handle financial records, bookkeeping, invoicing, and basic accounting tasks.",
  },
  {
    title: "Procurement Officer",
    description: "Manage purchasing processes, negotiate with suppliers, and ensure timely delivery of goods and services.",
  },
  {
    title: "Human Resource Assistant",
    description: "Support recruitment, staff welfare, and employee record management.",
  },
  {
    title: "Customer Service Representative",
    description: "Assist clients, resolve complaints, and maintain positive customer relations.",
  },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Career Opportunities in Business
        </h2>
  <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
  Graduates from the Business Department gain practical skills in management, accounting,
  marketing, entrepreneurship, and customer relations, preparing them for diverse career
  opportunities in corporate organizations, small businesses, and self-employment ventures.
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
