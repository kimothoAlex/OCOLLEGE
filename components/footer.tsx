"use client";
import Link from "next/link";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase">
          Orthodox College of Africa & Teachers Training College
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Empowering Generations Through Knowledge & Technology
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="/" className="text-white hover:text-blue-200">
            Home
          </a>
          <a href="/aboutUs" className="text-white hover:text-blue-200">
            About Us
          </a>
          <a href="/courses" className="text-white hover:text-blue-200">
            Courses
          </a>
          <a href="/contact" className="text-white hover:text-blue-200">
            Contact
          </a>  
          </div>
            {/* Contact Info */}
        <div className="space-y-2 text-lg">
          <p>📍 Address: P.O. BOX 34075-00100 Nairobi, Kenya</p>
          <p>📞 Phone: <a href="0721720655/" className="hover:text-yellow-300">+254 700 000 000</a></p>
          <p>✉️ Email: <a href="mailto:octoafrica@gmail.com" className="hover:text-yellow-300">octoafrica@gmail.com</a></p>
        </div>
          <p className="mb-6">
          Accredited by the{" "}
          <Link
            href="https://www.knec.ac.ke/"
            target="_blank"
            className="underline hover:text-yellow-300"
          >
            Kenya National Examinations Council (KNEC)
          </Link>{" "}
          for TVET and business courses <br /> and recognized as an official KNEC exam center.
        </p>
        <div className="mt-6 border-t border-blue-400/50 pt-4 text-sm text-gray-300">
          © {new Date().getFullYear()} Orthodox College of Africa & TTC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
