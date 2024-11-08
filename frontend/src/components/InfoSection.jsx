import React from 'react';

const InfoSection = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-pink-100 transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-between mb-4 ">
        <i className={`${icon} text-4xl text-pink-600`}></i>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      </div>
      <p className="text-gray-600 text-justify leading-5">{description}</p>
    </div>
  );
};

export default InfoSection;
