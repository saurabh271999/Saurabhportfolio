import React from 'react';

const educationData = [
  {
    university: "APJ Abdul Kalam Technical University",
    duration: "2022-2024",
    college: "IMS Engineering College",
    course: "Master Of Computer Application",
    location: "Ghaziabad, India",
    gpa: "7.2/10",
    achievements: [
      "Got Highest Internal Marks",
      "Won the weightlifting competition",
      "Won the tug of war competition"
    ]
  },
  {
    university: "CCS University",
    duration: "2019-2022",
    college: "MMH College",
    course: "Bachelor Of Computer Application",
    location: "Ghaziabad, India",
    gpa: "7.2/10",
    achievements: [
      "Top in the Third Semester",
      "Got Highest Internal Marks",
      "Participated in Tech Fest"
    ]
  }
];

const Education = () => {
  return (
    <div className="min-h-screen pb-10 bg-[#0F1729] flex flex-col items-center px-4">
      <h1 className="text-white text-5xl font-bold mt-10 border-b-2 inline-block border-blue-500">Education</h1>

      {educationData.map((data, index) => (
        <div
          key={index}
          className="text-white bg-[#131C2F] flex flex-col border shadow-sm p-6 w-full md:w-1/2 mt-10 rounded-xl"
        >
          <div className="flex justify-between text-center">
            <span>{data.university}</span>
            <span>{data.duration}</span>
          </div>

          <h2 className="text-2xl mt-6 font-semibold">{data.college}</h2>
          <h3 className="text-3xl mt-2 font-semibold">{data.course}</h3>
          <p className="text-lg mt-2 text-gray-400">{data.location}</p>
          <p className="mt-5 font-bold">GPA: {data.gpa}</p>

          <h4 className="mt-5 font-bold">Achievements:</h4>
          <ul className="list-disc list-inside">
            {data.achievements.map((item, i) => (
              <li key={i} className="mt-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;
