"use client";

import { useEffect, useState } from "react";

export default function IntakePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 2 seconds after load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-xl text-center animate-fadeIn">

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-700">
          January Intake Ongoing
        </h2>

        {/* Message */}
        <p className="mt-3 text-gray-700">
          Applications are now open at <strong>Orthodox College Of Africa – Teachers Training College</strong>.
          Secure your slot today and begin your professional journey.
        </p>
        <p className="mt-3 font-bold font-serif text-gray-700">
          We wish you a Merry Christmas and a Prosperous New Year! 2026
        </p>

        {/* Button */}
        <a
          href="/apply"
          className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
