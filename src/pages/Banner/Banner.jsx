import React from 'react';

const Banner = () => {
    return (
         <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/KxMsY5HZ/banner-1181406.jpg"
            className=" rounded-lg "
          />
          <div>
            <h1 className=" text-blue-400 text-3xl lg:text-4xl font-bold">Launch Your Career!</h1>
            <p className="text-gray-600 py-6">
            We bring you closer to the companies shaping the future.
             Explore job opportunities that truly match your ambitions.
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;