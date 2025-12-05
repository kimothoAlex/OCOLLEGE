"use client";
import Link from "next/link";
import ig from "../public/ig.jpeg";
import fb from "../public/fb.jpeg";
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
          {/* <a href="/courses" className="text-white hover:text-blue-200">
            Courses
          </a> */}
          {/* <a href="/contact" className="text-white hover:text-blue-200">
            Contact
          </a>   */}
          </div>
            {/* Contact Info */}
        <div className="space-y-2 text-lg">
          <p>📍 Address: P.O. BOX 34075-00100 Nairobi, Kenya</p>
          <p>📞 Phone: 0721720655/0777892344</p>
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
        <div className="flex justify-between">
          <Link
            href="https://www.instagram.com/orthodox_college?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="underline hover:text-yellow-300"
          >
            <img src={ig.src} alt="Instagram" className="inline h-6 w-6 mr-2" />
            Follow us on Instagram
          </Link>
          <Link
            href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61564311280116%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AT01cvYmNqt1B7SaNuTflTWwAr00x-_u-dzj-ou7kJM7-Vg8Jebkx4TDb6acZtqYdmiOYIkzb7OI3rr-OPAd_ay3xc2AP5pWRz6-oDHsgg"
            target="_blank"
            className="underline hover:text-yellow-300"
          >
            <img src={fb.src} alt="Instagram" className="inline h-6 w-6 mr-2" />
            Follow us on Facebook
          </Link>
        </div>
        
        <div className="mt-6 border-t border-blue-400/50 pt-4 text-sm text-gray-300">
          © {new Date().getFullYear()} Orthodox College of Africa & TTC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
