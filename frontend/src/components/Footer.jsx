import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-white text-gray-800 py-10 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-bold text-pink-500 mb-4 ">Mediease</h2>
              <p className="text-sm mb-4">Connecting patients with top healthcare providers and wellness experts.</p>
              <img src="https://i.pinimg.com/564x/2d/45/92/2d4592403bcb48279bf0c38204a01798.jpg" alt="Mediease" className="rounded-lg w-full " />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-500 mb-2">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Home</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">About</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Service</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Docter</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-500 mb-2">Support</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">FAQs</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-pink-500 transition duration-200">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-500 mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-pink-500 transition duration-200"><FaFacebookF /></a>
                <a href="#" className="text-gray-800 hover:text-pink-500 transition duration-200"><FaTwitter /></a>
                <a href="#" className="text-gray-800 hover:text-pink-500 transition duration-200"><FaInstagram /></a>
                <a href="#" className="text-gray-800 hover:text-pink-500 transition duration-200"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-pink-500 pt-6 text-sm text-center">
            <p>&copy; 2024 Mediease. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
