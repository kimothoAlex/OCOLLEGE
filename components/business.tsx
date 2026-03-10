"use client";

import { Card } from "flowbite-react";
import React from "react";

export default function Courses() {
  const courses = [
    {
      title: "CPA sec 1 (Kasneb)",
      duration: "6 months",
      qualification: "KCSE C+ (plus) and above",
    },
    {
      title: "CPA sec 2 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in sec 1",
    },
    {
      title: "CPA sec 3 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in sec 2",
    },
    {
      title: "CPA sec 4 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in sec 3",
    },
    {
      title: "CPA sec 5 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in sec 4",
    },
    {
      title: "CPA sec 6 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in sec 5",
    },
    {
      title: "ATD 1 (Kasneb)",
      duration: "6 months",
      qualification: "KCSE c- (minus) and above",
    },
    {
      title: "ATD 2 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in ATD 1",
    },
    {
      title: "ATD 3 (Kasneb)",
      duration: "6 months",
      qualification: "Pass in ATD 2",
    },
    {
      title: "Diploma in Business Administration (Module 1)",
      duration: "3 terms",
      qualification: "KCSE C- (minus) and above",
    },
    {
      title: "Diploma in Business Administration (Module 2)",
      duration: "3 terms",
      qualification: "Pass in module 1",
    },
    {
      title: "Diploma in Business Administration (Module 3)",
      duration: "3 terms",
      qualification: "Pass in module 2",
    },
    {
      title: "Certificate in Business Administration (Module 1)",
      duration: "3 Terms",
      qualification: "KCSE D (plain) and above",
    },
    {
      title: "Certificate in Business Administration (Module 2)",
      duration: "3 Terms",
      qualification: "Pass in module 1",
    },
    {
      title: "Certificate in Accounting Management Skills (CAMS) level 1",
      duration: "6 Months",
      qualification: "KCSE D+ (plus) and above",
    },
    {
      title: "Certificate in Accounting Management Skills (CAMS) level 2",
      duration: "6 Months",
      qualification: "Pass in level 1",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-white">
          Business Department Courses
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
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
