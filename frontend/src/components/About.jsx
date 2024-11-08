import React from 'react'

function AboutUs() {
  return (
    <div>
       <section 
      className="flex flex-col md:flex-row items-center justify-between w-full h-[70vh] text-white bg-white px-8 "  style={{ fontFamily: "'Oxygen', sans-serif" }}>
    
      <div className=" md:w-1/2 text-center md:text-left p-10 px-[8vw]">
        <h2 className="text-5xl font-bold mb-6 text-zinc-800">About Mediease</h2>
        <p className="text-lg mb-4 text-justify leading-6 text-zinc-500">
          Mediease is a safe, supportive space designed to connect individuals with compassionate mental health professionals. We’re dedicated to making quality mental health care accessible and removing barriers to help.
        </p>
        <p className="text-lg text-justify leading-6 text-zinc-500">
          Our platform connects patients with licensed psychiatrists and therapists for confidential consultations, aiming to support mental wellness and provide tools for a healthier mind. Whether you’re seeking guidance, treatment, or just someone to listen, Mediease is here for you.
        </p>
        <button className=' text-2xl rounded-full bg-pink-500 text-white font-semibold py-3 px-6   mt-6 shadow-lg'>Start</button>
      </div>

     
      <div className="md:w-1/2 relative w-full h-64 md:h-full p-10">
        <img src="https://i.pinimg.com/564x/82/d9/96/82d99681ef72bac953696f31ae5abc76.jpg" className='w-[30vw] h-full' alt="" />
      </div>
    </section>
    </div>
  )
}

export default AboutUs
