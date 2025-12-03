"use client";

import { Card } from "flowbite-react";
import React from "react";

export default function Courses() {
  const courses = [
    {
      title: "Garment Making",
      duration: "1 Year of 3 terms",
      qualification: "Open to all",
      cost: "Ksh 10,000 per Term",
    },
    {
      title: "Bead Work",
      duration: "3 months",
      qualification: "Open to all",
      cost: "10,000",
    },
    {
      title: "Interior Decoration",
      duration: "3 Months",
      qualification: "Open to All",
      cost: "Ksh 10,000",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-white">
         Fashion & Design Department Courses
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h5>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Duration:</strong> {course.duration}</li>
                <li><strong>Qualification:</strong> {course.qualification}</li>
                <li><strong>Cost:</strong> {course.cost}</li>
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
