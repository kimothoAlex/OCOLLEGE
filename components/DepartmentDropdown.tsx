import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function DepartmentsDropdown() {
  return (
    <div className="relative group">
      {/* Button */}
      <button
        className="flex items-center gap-2 text-white text-lg md:text-xl hover:text-yellow-300 transition"
      >
        Departments <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      <div
        className="absolute left-0 top-full mt-3 w-80 bg-white rounded-xl shadow-xl p-4 grid grid-cols-1 gap-3 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      >

        <Link href="/ict" className="block p-3 rounded-lg hover:bg-blue-50">
          <h3 className="font-semibold text-blue-600">ICT Department</h3>
          <p className="text-sm text-gray-500">Programming, Networking & AI</p>
        </Link>

        <Link href="/business" className="block p-3 rounded-lg hover:bg-blue-50">
          <h3 className="font-semibold text-blue-600">Business Department</h3>
          <p className="text-sm text-gray-500">Accounting & Entrepreneurship</p>
        </Link>

        <Link href="/education" className="block p-3 rounded-lg hover:bg-blue-50">
          <h3 className="font-semibold text-blue-600">Education Department</h3>
          <p className="text-sm text-gray-500">Teacher training & pedagogy</p>
        </Link>

        <Link href="/social" className="block p-3 rounded-lg hover:bg-blue-50">
          <h3 className="font-semibold text-blue-600">Social Work</h3>
          <p className="text-sm text-gray-500">Community & welfare studies</p>
        </Link>

        <Link href="/fashion" className="block p-3 rounded-lg hover:bg-blue-50">
          <h3 className="font-semibold text-blue-600">Fashion & Design</h3>
          <p className="text-sm text-gray-500">Design & garment making</p>
        </Link>

      </div>
    </div>
  )
}
