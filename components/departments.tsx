"use client";

import Image from "next/image";
import Link from "next/link";
import business from "../public/business.jpeg";
import socialWork from "../public/social.jpeg";
import fashion from "../public/fashion1.jpeg";
import it from "../public/lab.jpeg";
import theology from "../public/croos1.jpeg";
import education from "../public/education.jpg";


export default function DepartmentsSection() {
  const departments = [
     {
      name: "Department of Education",
      image: theology,
      description:
        "Shaping competent and passionate educators for the future of learning.",
      link: "/education",
    },
    {
      name: "Department of Social Work",
      image: socialWork, 
      description:
        "Training compassionate professionals to serve and support communities effectively.",
      link: "/social",
    },
    {
      name: "Department of Information Technology",
      image: it,
      description:
        "Equipping students with skills in software, hardware, networking, and emerging technologies.",
      link: "/ict",
    },
    {
      name: "Department of Business",
      image: business,
      description:
        "Preparing future leaders in entrepreneurship, management, and financial literacy.",
      link: "/business",
    },
    {
      name: "Department of Fashion & Design",
      image: fashion,
      description:
        "Empowering creativity and innovation in the world of clothing and design.",
      link: "/fashion",
    },
    // {
    //   name: "Department of Theological Studies",
    //   image: theology,
    //   description:
    //     "Providing deep biblical knowledge and pastoral training for ministry work.",
    //   link: "/departments/theology",
    // },
   
  ];

  return (
    <section id="departments" className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Our Departments
        </h2>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-4xl transition duration-300 flex flex-col"
            >
              <Image
                src={dept.image}
                alt={dept.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {dept.description}
                </p>
                <Link
                  href={dept.link}
                  className="mt-4 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Visit Department
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
