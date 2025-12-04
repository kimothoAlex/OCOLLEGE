import Image from "next/image";

// Replace with actual images
import principalImg from "../public/bishop1.jpg";
import deputyImg from "../public/rev.jpeg";
import registrarImg from "../public/revpaul.jpg";
import deanImg from "../public/bishop1.jpg";

export default function SeniorManagement() {
 const managementTeam = [
  {
    name: "Archbishop Makarios",
    title: "Rector",
    image: principalImg,
    bio: "Providing overall leadership and vision for Orthodox College of Africa, ensuring academic excellence and strong Orthodox values.",
    featured: true,
  },
  {
    name: "Rev. Fr. Nicholas Kimani",
    title: "Vice Rector",
    image: deputyImg,
    bio: "Oversees academic programs and faculty development, supporting students to reach their full potential.",
  },
  {
    name: "Rev. Fr. Paul Njoroge",
    title: "Registrar",
    image: registrarImg,
    bio: "Responsible for student admissions, records, and exam administration, ensuring smooth academic operations.",
  },
  // {
  //   name: "Dr. Mary Achieng",
  //   title: "Dean of Students",
  //   image: deanImg,
  //   bio: "Advocates for student welfare, providing mentorship and fostering a supportive learning environment.",
  // },
]

const archbishop = managementTeam.find(member => member.featured)
const others = managementTeam.filter(member => !member.featured)

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

    {/* FEATURED: ARCHBISHOP */}
    {archbishop && (
      <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">

        <Image
          src={archbishop.image}
          alt={archbishop.name}
          className="w-52 h-52 object-cover rounded-full border-4 border-blue-200"
        />

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-800">
            {archbishop.name}
          </h2>
          <p className="text-xl font-medium text-gray-500">
            {archbishop.title}
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            {archbishop.bio}
          </p>
        </div>
      </div>
    )}

    {/* OTHER MANAGEMENT */}
    <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
      {others.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center"
        >
          <Image
            src={member.image}
            alt={member.name}
            className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-blue-100"
          />
          <h3 className="mt-4 text-xl font-semibold text-blue-700">
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
