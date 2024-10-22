import React from 'react';
import x600 from '../assets/600x400.jpg';
const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Made for Food Lovers, by Food Lovers</h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          At <span className="text-red-800 font-bold">Recipe Finder</span>, we believe cooking should be simple, fun, 
          and accessible for everyone. Our platform is built to help both beginners and seasoned 
          cooks find delicious, easy-to-follow recipes. Whether you’re preparing meals for your 
          family or experimenting with new flavors, we've got you covered.
        </p>
        
        <div className="flex justify-center">
          <img
            src={x600} 
            alt="Team cooking together"
            className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover hover:scale-105 duration-300"
          />
        </div>
        
        <p className="text-gray-600 text-md mt-6">
          Join us in making every cooking experience exciting and satisfying. 
          Start exploring new recipes today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
