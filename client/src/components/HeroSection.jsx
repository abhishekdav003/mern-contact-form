import { useEffect, useRef, useState } from "react";
import contact_icon from "../assets/contactUs_icon.svg";
import "./custome.css";
import ContactUs from "./Contactus";

const images = [
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738644825/febTech/Nifa/vuf70b6gvi1rcyxaybmh.jpg",
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738644703/febTech/Nifa/mdyaupwohu7s3v9n2zne.jpg",
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738643659/febTech/Nifa/rrir1e6uecpjwhsukcjg.jpg",
];

export default function HeroSection() {
  const sliderRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const speed = 2;

    const scrollImages = () => {
      if (slider) {
        scrollAmount += speed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollImages);
    };
    scrollImages();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900">
      <div
        ref={sliderRef}
        className="flex w-full h-full overflow-hidden whitespace-nowrap scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white p-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold cormorant-garamond-semibold-italic">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-2xl mt-4">Experience the best services with us</p>
      </div>
      <div
        className="absolute h-24 w-24 bg-[#f48504] rounded-full flex justify-center items-center animate-bounce hover:cursor-pointer right-64 top-80"
        onClick={() => setShowContact(true)}
      >
        <span className="h-16 w-16">
          <img src={contact_icon} alt="Contact Icon" className="h-full w-full font-black" />
        </span>
      </div>

      {/* Modal for ContactUs Component */}
      {showContact && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className=" rounded-lg  relative ">
            <button
              className="absolute top-20 right-10 text-gray-600 hover:text-gray-900"
              onClick={() => setShowContact(false)}
            >
              ✖
            </button>
            <ContactUs />
          </div>
        </div>
      )}
    </div>
  );
}