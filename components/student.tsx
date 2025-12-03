import Image from "next/image";
import libraryImage from "../public/library.jpeg"; // replace with your actual images
import studentsImage from "../public/studentActivities.jpeg";
import activitiesImage from "../public/cultural.jpeg";

export default function StudentLife() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-blue-800">
          Student Life at OCA
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          At Orthodox College of Africa, we believe that education extends beyond the classroom. 
          Our students grow academically, spiritually, and socially in a supportive and vibrant community.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Library */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <Image src={libraryImage} alt="Library" className="h-56 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-700">Modern Library</h3>
            <p className="mt-3 text-gray-600">
              Our well-equipped library provides access to academic resources, research materials, and 
              a quiet space for focused study.
            </p>
          </div>
        </div>

        {/* Community */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <Image src={studentsImage} alt="Community" className="h-56 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-700">Vibrant Community</h3>
            <p className="mt-3 text-gray-600">
              Students enjoy a supportive environment where friendships and networks are built for life, 
              guided by Orthodox Christian values.
            </p>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <Image src={activitiesImage} alt="Activities" className="h-56 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-700">Clubs & Activities</h3>
            <p className="mt-3 text-gray-600">
              From academic clubs to cultural events, OCA provides opportunities for leadership, creativity, 
              and personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
