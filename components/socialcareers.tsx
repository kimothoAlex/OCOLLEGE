"use client";

import React from "react";

export default function CareerOpportunitiesSocial() {
  const careers = [
     {
        title: "Community Development Officer",
        description:
          "Works with communities to identify needs and implement socio-economic development projects.",
      },
      {
        title: "Social Worker",
        description:
          "Provides support, counseling, and intervention to individuals, families, and vulnerable groups.",
      },
      {
        title: "Case Manager",
        description:
          "Coordinates services and support plans for clients in hospitals, NGOs, and community agencies.",
      },
      {
        title: "NGO / CBO Officer",
        description:
          "Works with non-governmental and community-based organizations to implement social programs.",
      },
      {
        title: "Rehabilitation Officer",
        description:
          "Supports rehabilitation of individuals affected by substance abuse, trauma, or disabilities.",
      },
      {
        title: "Youth & Gender Officer",
        description:
          "Promotes youth empowerment and gender equality programs in communities.",
      },
       {
        title: "Social Work Assistant",
        description:
          "Assists professional social workers in conducting assessments and supporting clients.",
      },
      {
        title: "Community Mobilizer",
        description:
          "Engages local communities in awareness, participation, and development initiatives.",
      },
      {
        title: "Volunteer Coordinator",
        description:
          "Organizes and manages volunteers for NGOs and community projects.",
      },
      {
        title: "Children’s Home Caregiver",
        description:
          "Provides care, guidance, and support to children in care institutions.",
      },
      {
        title: "Field Assistant",
        description:
          "Supports data collection and implementation of community outreach programs.",
      },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Career Opportunities in Social Work
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Graduates from the Social Work Department are equipped with practical skills and compassionate insight to serve individuals, families, and communities. They are prepared for meaningful careers in community development, social services, advocacy, and support roles within government agencies, NGOs, and humanitarian organizations.
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
