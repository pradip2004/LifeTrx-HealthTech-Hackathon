import React from 'react';

function LandingDoctor() {
  return (
    <div style={{ fontFamily: "'Oxygen', sans-serif" }}>
      <div className="main w-full h-[70vh]  p-4 pl-10">
        <div className="first w-full h-[60vh] rounded-xl mt-4 flex transition-all duration-1000 ease-in-out">
          <div className="flex flex-col justify-center items-start w-1/2 h-full p-8 rounded-2xl">
            <h1 className="text-[5vw] font-semibold leading-[4vw] mt-8 text-gray-800 transition-opacity duration-1000 opacity-100">
              Wellness for Body, Mind, and Spirit
            </h1>
            <p className="text-xl text-zinc-600 mt-4 transition-opacity duration-1000 opacity-100">
              Take the First Step Toward Healing
            </p>
            <p className="text-xl text-gray-800 transition-opacity duration-1000 opacity-100">
              With Mediease, Your Mental Wellness Journey Begins.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-full text-lg font-medium transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white">
                Start
              </button>
            </div>
          </div>

          <div className="right w-1/2 h-full grid grid-rows-3 grid-cols-4 gap-2">
      
            <div className="bg-zinc-500 row-span-1 col-span-2 rounded-lg overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/474x/bc/52/5b/bc525b0185a8880c22be1ab9be7beb57.jpg"
                alt="Dr. John Doe"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Dr. John Doe</h3>         
              </div>
            </div>        
            <div className="bg-zinc-500 row-span-2 col-span-1 rounded-lg overflow-hidden relative group">
              <img
                src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdGVyfGVufDB8fDB8fHww"
                alt="Dr. Sarah Smith"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Dr. Sarah Smith</h3> 
              </div>
            </div>
            <div className="bg-zinc-500 row-span-1 col-span-1 rounded-lg overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/474x/ed/a9/1d/eda91d785c7a143c6890d62fb6d0a2a7.jpg"
                alt="Dr. Alex Lee"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Dr. Alex Lee</h3>
             
              </div>
            </div>       
            <div className="bg-zinc-500 row-span-2 col-span-2 rounded-lg overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/474x/15/5c/c7/155cc7e7ce769fa90b900a83e8f5584a.jpg"
                alt="Dr. Lisa Wu"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Dr. Lisan Wu</h3>

              </div>
            </div>
            <div className="bg-zinc-500 row-span-1 col-span-1 rounded-lg overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/474x/6a/91/b4/6a91b4978cca3e5d271565419d0657a8.jpg"
                alt="Dr. Michael Brown"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Dr. Emma Stone</h3>        
              </div>
            </div>

            {/* Doctor 6 */}
            <div className="bg-zinc-500 row-span-1 col-span-2 rounded-lg overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/474x/e6/21/c2/e621c2c9381c059cc61f17f76647de20.jpg"
                alt="Dr. Emma Stone"
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">Dr. Michael Brown</h3>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingDoctor;
