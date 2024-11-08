import React from 'react';
import InfoSection from '/src/Components/InfoSection';
import { FaSpa, FaVideo, FaClock, FaLaptop, FaUserMd, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaSpa className="text-4xl text-pink-500" />,
    title: 'Yoga',
    description: 'Engage in tailored yoga sessions to enhance both your physical and mental health. Whether online or offline, our expert instructors will guide you every step of the way.',
  },
  {
    icon: <FaVideo className="text-4xl text-pink-500" />,
    title: 'Video Call Service',
    description: 'Access top-tier mental health professionals through secure video calls, providing you with a confidential, accessible, and flexible consultation experience, anywhere you are.',
  },
  {
    icon: <FaClock className="text-4xl text-pink-500" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to ensure you receive the mental health assistance you need, whenever you need it.',
  },
  {
    icon: <FaLaptop className="text-4xl text-pink-500" />,
    title: 'Online & Offline Mode',
    description: 'Choose between seamless online consultations or in-person visits, giving you the flexibility to select the mode that suits your preferences and schedule.',
  },
  {
    icon: <FaUserMd className="text-4xl text-pink-500" />,
    title: 'Best Doctors',
    description: 'Consult with the best licensed mental health professionals, offering expert care and guidance to support your overall well-being and mental health.',
  },
  {
    icon: <FaMobileAlt className="text-4xl text-pink-500" />,
    title: 'App Integration',
    description: 'Access all our services on-the-go through our intuitive mobile app, designed for easy scheduling, communication, and tracking your mental health journey.',
  },
];

const ServiceSection = () => {
  return (
    <section className="w-full h-[100vh] mb-11 py-10 bg-gradient-to-r from-pink-400 to-pink-600 text-black">
      <div className="max-w-[80vw] w-full text-center mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">Our Professional Services</h2>
        <p className="text-lg mb-6 leading-relaxed text-white">
          We offer a variety of services to ensure your mental well-being is supported wherever you are. Whether online or offline, we are here 24/7 to provide the care you need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InfoSection 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
