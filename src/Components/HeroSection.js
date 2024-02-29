
import React from 'react';
const HeroSection = () => {
  return (
    <div className=" bg-blue-900 text-white pt-[120px] pb-20">
      <div className=" mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Founded in 2017, Bluetick Consultants</h1>
        <p className="text-lg mb-4">
          A technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
        </p>
        <p className="text-lg mb-8">
          Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions.
        </p>
        <a
          href="https://www.bluetickconsultants.com/generative-ai.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-gray-200"
        >
          To know more about us
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

