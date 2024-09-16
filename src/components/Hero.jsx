import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import back from "../assets/Images/5.jpg";
import back2 from "../assets/Images/6.jpg";
import back3 from "../assets/Images/7.jpg";
import back4 from "../assets/Images/8.jpg";

const images = [back, back2, back3, back4];

const Hero = ({ isHome = true, title = "Jozi Food Maker" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className={`relative flex flex-col w-full bg-cover bg-center h-[60vh] transition-all duration-500 ${isHome ? 'md:h-screen' : 'md:h-[60vh]'}`}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      
      <div className="absolute inset-0 flex items-center justify-center flex-col text-white py-20">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10, duration: 2.5, delay: 1 }}
          className="text-[#fff72e] text-5xl md:text-9xl font-dancing mb-8 px-7"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10, duration: 2, delay: 1.5 }}
          className={`text-3xl md:text-8xl uppercase font-extrabold ${isHome? "block" : "hidden"}`}
        >
          Done right
        </motion.p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 w-full flex items-center justify-center space-x-4">
        <button
          onClick={handlePrevClick}
          className="text-white text-3xl border border-white border-r-4 p-2 rounded-full hover:bg-yellow-400"
        >
          <FaChevronLeft />
        </button>

        <div className="flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-full cursor-pointer ${index === currentIndex ? 'bg-yellow-400' : 'bg-gray-500'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="text-white text-3xl border border-white border-r-4 p-2 rounded-full hover:bg-yellow-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Hero;
