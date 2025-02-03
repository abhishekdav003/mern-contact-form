import React, { useState } from "react";
import "./LandingPage.css";
import backgroundImg from "./bg-img.jpg"; // Import your background image

const LandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here, e.g., call an API
  };

  return (
    <div className="landing-page relative w-full h-screen">
      <img
        className="absolute inset-0 object-cover w-full h-full opacity-40"
        src={backgroundImg}
        alt="Background"
      />

      <div className="container mx-auto px-6 py-12 relative z-10 flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg bg-transparent">
            <h2 className="text-3xl font-semibold text-gray-800">Who we are</h2>
            <p className="text-lg text-gray-600 mt-4">
              NIFA OVERSEAS is a handicraft export, trading, and manufacturing
              company that specializes in producing and selling antique
              handicraft products made by skilled small artisans.
            </p>

            <div className="flex mt-6 space-x-4">
              <SocialIcon
                imgSrc="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                alt="Twitter"
              />
              <SocialIcon
                imgSrc="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                alt="Facebook"
              />
              <SocialIcon
                imgSrc="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                alt="Google"
              />
              <SocialIcon
                imgSrc="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                alt="Instagram"
              />
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Us
            </h2>
            <p className="text-md text-gray-600 mt-2">
              We will get back to you in 24 hours
            </p>

            <div className="space-y-4 mt-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.lastName}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.phoneNumber}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Type message here"
                className="w-full px-4 py-2 h-32 border border-gray-300 rounded-lg"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ imgSrc, alt }) => (
  <a href="#" className="hover:scale-110 transition-all duration-300">
    <img src={imgSrc} alt={alt} className="w-8 h-8" />
  </a>
);

export default LandingPage;

