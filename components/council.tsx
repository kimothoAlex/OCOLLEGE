import Image from "next/image";
import council1 from "../public/bishop1.jpg"; // replace with real images
import council2 from "../public/bishop1.jpg";
import council3 from "../public/bishop1.jpg";
import council4 from "../public/bishop1.jpg";

export default function StudentCouncil() {
  const councilMembers = [
    {
      name: "John Mwangi",
      role: "President",
      image: council1,
    },
    {
      name: "Grace Achieng",
      role: "Vice President",
      image: council2,
    },
    {
      name: "Samuel Otieno",
      role: "Treasurer",
      image: council3,
    },
    {
      name: "Esther Wanjiru",
      role: "Secretary",
      image: council4,
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-blue-800">
          Student Council
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          The Student Council represents the voice of the student body at OCA. 
          They foster leadership, organize activities, and ensure students are 
          actively involved in shaping our community.
        </p>
      </div>

      {/* Grid of members */}
      <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {councilMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition text-center p-6"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-700">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
