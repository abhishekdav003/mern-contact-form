import { useEffect, useRef, useState } from "react";
import contact_icon from "../assets/contactUs_icon.svg";
import "./custome.css";
import ContactUs from "./Contactus";

const desktopImages = [
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738665613/febTech/Nifa/qxi8md9hqaqekyarg8tm.png",
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738644703/febTech/Nifa/mdyaupwohu7s3v9n2zne.jpg",
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738643659/febTech/Nifa/rrir1e6uecpjwhsukcjg.jpg",
];

const mobileImages = [
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738666020/febTech/Nifa/d5nlcewsjmjjbrpswyda.jpg",
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738644703/febTech/Nifa/mdyaupwohu7s3v9n2zne.jpg",
  "https://res.cloudinary.com/dbnticsz8/image/upload/v1738643659/febTech/Nifa/rrir1e6uecpjwhsukcjg.jpg",
];

export default function HeroSection() {
  const sliderRef = useRef(null);
  const [showContact, setShowContact] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900">
      <div ref={sliderRef} className="flex w-full h-full overflow-hidden whitespace-nowrap">
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
        <h1 className="text-4xl md:text-6xl font-bold cormorant-garamond-semibold-italic text-gray-100">
          Welcome to Nifa Overseas Pvt. Ltd.
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-100">Experience the best handcrafted products with us</p>
      </div>
      <div
        className="absolute bottom-0 right-7 h-24 w-24 bg-[#f48504] rounded-full flex justify-center items-center animate-bounce hover:cursor-pointer"
        onClick={() => setShowContact(true)}
      >
        <span className="h-16 w-16">
          <img src={contact_icon} alt="Contact Icon" className="h-full w-full font-black" />
        </span>
      </div>

      {showContact && (
        <div className="absolute inset-0 flex justify-end items-center bg-black bg-opacity-50">
          <ContactUs onClose={() => setShowContact(false)} />
        </div>
      )}
    </div>
  );
}
