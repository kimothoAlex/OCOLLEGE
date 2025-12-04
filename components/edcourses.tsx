"use client";

import { Card } from "flowbite-react";
import React from "react";

export default function Courses() {
  const courses = [
    {
      title: "Diploma in DTE First Year",
      duration: "3 terms (3 months each)",
      qualification: "KCSE C (plain) and above",
      cost: "Ksh 21,500 per Term",
    },
    {
      title: "Diploma in DTE Second Year",
      duration: "3 terms (3 months each)",
      qualification: "Completed First Year",
      cost: "Ksh 19,500 per Term",
    },
    {
      title: "Diploma in DTE Third Year",
      duration: "3 terms (3 months each)",
      qualification: "Completed Second Year",
      cost: "Ksh 18,500 per Term",
    },
  
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-white">
          Department of Diploma in Teacher Education (DTE) Courses  
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
