"use client";

import React from "react";

export default function CareerOpportunitiesFashion() {
  const careers = [
     {
        title: "Fashion Designer",
        description:
          "Designs and creates clothing for individuals, boutiques, and fashion brands.",
      },
      {
        title: "Tailor / Dressmaker",
        description:
          "Produces and alters garments for clients based on measurements and style preferences.",
      },
      {
        title: "Garment Production Assistant",
        description:
          "Works in clothing factories and workshops to support mass garment production.",
      },
      {
        title: "Boutique Owner",
        description:
          "Starts and manages a clothing shop or fashion brand.",
      },
      {
        title: "Costume Designer",
        description:
          "Creates clothing for stage plays, films, and cultural events.",
      },
       {
        title: "Bead Jewelry Designer",
        description:
          "Creates necklaces, bracelets, earrings, and other bead-based accessories.",
      },
      {
        title: "Craft Entrepreneur",
        description:
          "Starts a handmade crafts business selling beadwork items locally or online.",
      },
      {
        title: "Cultural Accessories Maker",
        description:
          "Designs traditional and modern bead products for cultural events and ceremonies.",
      },
      {
        title: "Art & Craft Trainer",
        description:
          "Teaches beadwork skills in community or vocational training centers.",
      },
      {
        title: "Interior Decorator",
        description:
          "Plans and designs indoor spaces for homes, offices, and commercial spaces.",
      },
      {
        title: "Event Stylist",
        description:
          "Designs and decorates venues for weddings, conferences, and special occasions.",
      },
      {
        title: "Home Styling Consultant",
        description:
          "Advises clients on décor, color schemes, and furniture arrangement.",
      },
      {
        title: "Set Designer",
        description:
          "Designs interior sets for photography, film, or television production.",
      },
      {
        title: "Décor Business Owner",
        description:
          "Starts and manages an interior décor or events styling business.",
      },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Career Opportunities in Fashion & Design
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Graduates from the Fashion and Design Department are equipped with creative, technical, and entrepreneurial skills that open doors to exciting career opportunities in garment production, interior decoration, beadwork, and the wider fashion and creative industries.
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
