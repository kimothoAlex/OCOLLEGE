"use client";

import { useState } from "react";

export default function AdmissionsForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    kcse: "",
    intake: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    const data = await res.json();
    if (data.success) {
      alert("✅ Application submitted successfully!");
      setForm({ name: "", email: "", phone: "", course: "" ,kcse: "", intake: ""});
    } else {
      alert("❌ Error: " + data.message);
    }
  };

  return (
    <div className="flex justify-center px-4 py-12 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
          Apply for Admission
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm sm:text-base">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm sm:text-base">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="[0-9+ ]{7,15}"
            placeholder="+254 712 345 678"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Phone */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm sm:text-base">
            KCSE Mean Grade
          </label>
         {/* KCSE Mean Grade */}
        <input
          type="text"
          name="kcse"
          placeholder="KCSE Mean Grade (e.g. C+, B, A-)"
          value={form.kcse}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />
        </div>

        {/* Courses Dropdown */}
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-sm sm:text-base">
            Select Course
          </label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select a Course --</option>

            {/* Department of Education */}
            <optgroup label="Department of Education">
              <option>Diploma in Teacher Education</option>
              <option>Upgrade in Diploma in Teacher Education</option>
            </optgroup>

            {/* Department of Fashion & Design */}
            <optgroup label="Department of Fashion & Design">
              <option>Certificate in Fashion & Design</option>
              <option>Craft Certificate in Tailoring</option>
            </optgroup>

            {/* Department of Business Studies */}
            <optgroup label="Department of Business Studies">
              <option>CPA (Certified Public Accountants) Part I, II, III</option>
              <option>ATD (Accounting Technician Diploma) Part I, II, III</option>
              <option>Diploma in Human Resource Management (KNEC)</option>
              <option>Certificate in Human Resource Management (KNEC)</option>
              <option>Diploma in Business Administration (KNEC)</option>
              <option>Certificate in Business Administration (KNEC)</option>
            </optgroup>

            {/* Department of Information Technology */}
            <optgroup label="Department of Information Technology">
              <option>Diploma in Information Technology</option>
              <option>Certificate in Information Technology</option>
              <option>Certificate in Computer Packages</option>
              <option>Certificate in End User Packages</option>
            </optgroup>

            {/* Department of Social Studies */}
            <optgroup label="Department of Social Studies">
              <option>Diploma in Community Development</option>
              <option>Diploma in Social Work</option>
              <option>Certificate in Community Development</option>
            </optgroup>

            {/* Department of Theological Studies */}
            <optgroup label="Department of Theological Studies">
              <option>Diploma in Theology</option>
              <option>Certificate in Theology</option>
            </optgroup>

            {/* Other Courses */}
            <optgroup label="Other Courses">
              <option>HIV/AIDS and Counseling</option>
              <option>Research Skills and Report Writing</option>
              <option>Project Proposal Writing Skills</option>
              <option>CBO and NGO Management</option>
            </optgroup>
          </select>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-sm sm:text-base">
            Select Intake Month
          </label>
        {/* Intake Month Dropdown */}
        <select
          name="intake"
          value={form.intake}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Intake Month</option>
          <option>January</option>
          <option>April</option>
          <option>May</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>December</option>
        </select>
</div>
        {/* Submit */}
        <button 
          disabled
          type="submit"
          className=" w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          {loading ? "Loading..." : 'Apply Now'}
        </button>
      </form>
    </div>
  );
}
