import React, { useState } from "react";

const CardSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    {
      title: "Patients",
      description: "Connect with trusted healthcare providers, manage appointments, and access medical records.",
      buttonText: "Get Started",
      bgColor: "bg-white", // Set all divs to white
      hoverColor: "hover:bg-gray-100",
      number: "1,500", // Number of patients
    },
    {
      title: "Doctors",
      description: "Join our network to offer quality care and access innovative tools for patient management.",
      buttonText: "Join Now",
      bgColor: "bg-white", // Set all divs to white
      hoverColor: "hover:bg-gray-100",
      number: "300", // Number of doctors
    },
    {
      title: "Partners",
      description: "Collaborate with us to expand healthcare accessibility and develop new solutions.",
      buttonText: "Get in Touch",
      bgColor: "bg-white", // Set all divs to white
      hoverColor: "hover:bg-gray-100",
      number: "50", // Number of partners
    },
    {
      title: "24/7 Helpline",
      description: "We’re here to support you around the clock for any healthcare needs.",
      buttonText: "Call Now",
      bgColor: "bg-white", // Set all divs to white
      hoverColor: "hover:bg-gray-100",
      number: "200", // Number of helplines
    },
  ];

  return (
    <div className="flex items-center justify-center py-[4vw] p-10 bg-gradient-to-r from-pink-500 to-pink-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative p-8 rounded-xl shadow-lg ${section.bgColor} ${section.hoverColor} transition duration-300 ease-in-out transform hover:-translate-y-2`}
          >
            <div className={`relative z-10`}>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-sm font-semibold"></div>
                <div className="h-10 w-10 rounded-md bg-white shadow-md flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-600">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{section.title}</h3>
              <p className="mt-2 text-gray-600">{section.description}</p>
              <div className="mt-2 text-gray-600 font-semibold">
                <p>{section.title === "Patients" ? `Number of Patients: ${section.number}` : null}</p>
                <p>{section.title === "Doctors" ? `Number of Doctors: ${section.number}` : null}</p>
              </div>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition duration-300">
                {section.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
