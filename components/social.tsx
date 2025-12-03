"use client";

import { Card } from "flowbite-react";
import React from "react";

export default function Courses() {
  const courses = [
    {
      title: "Diploma in Social Work",
      duration: " 3 Modules of 3 terms each",
      qualification: "KCSE C- (minus) and above",
      cost: "Ksh 14,750 per Term",
    },
    {
      title: "Certificate in Social Work",
      duration: "2 Modules of 3 terms each",
      qualification: "KCSE D (plain) and above",
      cost: "Ksh 12,500 per year",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-white">
          Social Work Department Courses
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
