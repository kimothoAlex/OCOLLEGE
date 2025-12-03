import Image from "next/image";

// Replace with actual images
import principalImg from "../public/bishop1.jpg";
import deputyImg from "../public/bishop1.jpg";
import registrarImg from "../public/bishop1.jpg";
import deanImg from "../public/bishop1.jpg";

export default function SeniorManagement() {
  const managementTeam = [
    {
      name: "Rev. Dr. John Kamau",
      title: "Principal",
      image: principalImg,
      bio: "Providing overall leadership and vision for Orthodox College of Africa, ensuring academic excellence and strong Orthodox values.",
    },
    {
      name: "Grace Wanjiru",
      title: "Deputy Principal",
      image: deputyImg,
      bio: "Oversees academic programs and faculty development, supporting students to reach their full potential.",
    },
    {
      name: "Peter Otieno",
      title: "Registrar",
      image: registrarImg,
      bio: "Responsible for student admissions, records, and exam administration, ensuring smooth academic operations.",
    },
    {
      name: "Dr. Mary Achieng",
      title: "Dean of Students",
      image: deanImg,
      bio: "Advocates for student welfare, providing mentorship and fostering a supportive learning environment.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-blue-800">
          Senior Management
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the dedicated leadership team guiding Orthodox College of Africa
          towards academic excellence and holistic student development.
        </p>
      </div>

      {/* Management Cards */}
      <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {managementTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-blue-100"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-700">
              {member.name}
            </h3>
            <p className="text-gray-500 font-medium">{member.title}</p>
            <p className="mt-3 text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
