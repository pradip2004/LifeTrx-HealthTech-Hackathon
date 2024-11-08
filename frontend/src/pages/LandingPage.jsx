import React from 'react'
import HeroSection from '../components/HeroSection'
import LandingDoctor from '../components/LandingDocter'
import CardSection from '../components/CardSection'
import AboutUs from '../components/About'
import ServiceSection from '../components/ServiceSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className='w-full h-auto'>
      <HeroSection />
     <LandingDoctor/>
      <CardSection/>
     <AboutUs/>
       <ServiceSection/>
     <FAQSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage