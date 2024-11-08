import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="first-page h-screen w-screen bg-white">
        <nav className="h-[10vh] w-screen flex justify-between items-center px-[10vw]">
          <h1 className="text-2xl font-bold text-zinc-700">Mediease</h1>
          <div className="nav-points flex gap-[1vw] text-zinc-700 items-center">
            <a href="#" className="relative group">
              Home
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-700 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#" className="relative group">
              About
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-700 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#" className="relative group">
              Services
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-700 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#" className="relative group">
              Doctor
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-700 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#" className="relative group">
              Contact
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-700 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
            <button className="px-[1vw] py-[0.6vh] bg-white text-white !bg-rose-700 border border-rose-700 rounded mt-[1vh] ml-[0.5vw] transition-all duration-300 ease-in-out hover:!bg-white hover:text-rose-700">
              Sign In
            </button>
          </div>
        </nav>

        <div className="landing-page h-[90vh] w-screen px-[10vw] flex">
          <div className="landing-left w-[40vw] h-full flex flex-col justify-center">
            <h1 className="text-[5.8vw] font-semibold leading-[5vw] text-zinc-700 mb-4">
              Welcome to <span className="text-rose-700">Mediease</span>
            </h1>
            <h3 className="text-[1.2vw] mt-2 text-zinc-700 font-semibold">
              Caring for your mental health, one step at a time.
            </h3>
            <h2 className="text-base font-medium w-[80%] leading-[1.5vw] text-justify text-zinc-700 mt-4">
              At Mediease, we're dedicated to your mental well-being, offering
              support and tools to help you heal, grow, and thrive.
            </h2>
            <div className="flex justify-start">
              <button className="px-[2vw] py-[1vh] bg-white text-rose-700 border border-rose-700 rounded mt-[1vh] transition-all duration-300 ease-in-out hover:bg-rose-700 hover:text-white">
                Get Started
              </button>
            </div>
          </div>

          <div className="landing-right w-[60vw] h-[90vh] flex justify-center items-center relative bg-[radial-gradient(closest-side,rgba(255,142,160,0.5),rgba(255,255,255,0))]">
            <div className="absolute h-[50vh] w-[50vh] bg-white opacity-0 rounded-full z-0"></div>

            <div className="landing-round-main h-[50vh] w-[50vh] rounded-full z-10">
              <img src="./src/media/hero-img.png" alt="" />
            </div>

            {/* Circles with Borders */}
            <div className="lit-circle h-[15vh] w-[15vh] rounded-full bg-pink-200 absolute top-[22%] left-[22%] flex justify-center items-center overflow-hidden border-[0.5vh] border-rose-700 animate-upDown">
              <img
                src="https://i.pinimg.com/564x/29/7b/34/297b341e94d3669a31b44e69864f2d2b.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="lit-circle h-[15vh] w-[15vh] rounded-full bg-pink-200 absolute top-[60%] left-[20%] overflow-hidden border-[0.5vh] border-rose-700 animate-upDown delay-[200ms]">
              <img
                src="https://i.pinimg.com/564x/9b/62/9f/9b629f70bf7015d06195e9d4c3741d8d.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="lit-circle h-[20vh] w-[20vh] rounded-full bg-pink-200 absolute top-[20%] left-[70%] overflow-hidden border-[0.5vh] border-rose-700 animate-upDown delay-[400ms]">
              <img
                src="https://i.pinimg.com/564x/db/9a/23/db9a232bb490c776a1ab41a5d0c5d9e3.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="lit-circle h-[12vh] w-[12vh] rounded-full bg-pink-200 absolute top-[70%] left-[50%] overflow-hidden border-[0.5vh] border-rose-700 animate-upDown delay-[600ms]">
              <img
                src="https://i.pinimg.com/564x/a8/0e/bb/a80ebb53a32672c2f1dc95c1423f31e1.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="lit-circle h-[10vh] w-[10vh] rounded-full bg-pink-200 absolute top-[55%] left-[65%] overflow-hidden border-[0.5vh] border-rose-700 animate-upDown delay-[800ms]">
              <img
                src="https://i.pinimg.com/564x/82/d7/6e/82d76ef63d7daadfa0826bc9a41ddb8b.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes upDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-upDown {
          animation: upDown 5s infinite ease-in-out;
        }
      `}</style>
    </>
  )
}

export default HeroSection
