import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is our service about?',
      answer: 'We provide mental health services, including therapy, counseling, and well-being programs to help you manage and improve your mental health.',
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment through our mobile app or website. Choose your preferred mode (online or offline) and schedule at your convenience.',
    },
    {
      question: 'Are the sessions confidential?',
      answer: 'Yes, all sessions are 100% confidential. We follow the highest standards of privacy and data protection.',
    },
    {
      question: 'Can I cancel or reschedule?',
      answer: 'Yes, you can cancel or reschedule your appointment through your account on our platform, subject to our cancellation policy.',
    },
    {
      question: 'How do I know if I need therapy?',
      answer: 'If you feel overwhelmed, anxious, or are having trouble managing emotions or life events, therapy can be a helpful way to gain clarity and coping tools.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-pink-500 to-pink-300 flex flex-col items-center">
      <h2 className="text-[4vw] font-bold text-white mb-6 mt-10">Frequently Asked Questions</h2>
      <div className="w-full max-w-screen-xl h-[60vh] flex items-center justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full">
        
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-full h-[70vh] rounded-l-2xl overflow-hidden">
              <video
                src="/video3.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>

          <div className="space-y-6 h-full flex flex-col bg-white justify-center px-6 rounded-r-2xl">
          
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-3xl transition-all duration-500 hover:scale-105 transform"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <FaChevronDown
                    className={`text-xl text-zinc-900 transform transition-transform duration-500 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="text-base mt-4 text-zinc-500 transition-all duration-500">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
