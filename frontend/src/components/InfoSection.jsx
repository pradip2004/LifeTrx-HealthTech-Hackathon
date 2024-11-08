import React from 'react';

const InfoSection = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-between">
        {icon}
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mt-2 text-justify">{description}</p>
    </div>
  );
};

export default InfoSection;
