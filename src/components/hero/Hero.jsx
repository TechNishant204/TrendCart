import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-full container px-12 py-12 mx-auto text-center bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-500 dark:text-blue-700 mb-8 mt-12">
          Luxury in Every Wearable, Deals You Can't Miss!
        </h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience premium wearables with cutting-edge technology, stylish
          designs, and unbeatable prices—quality and innovation that fit your
          lifestyle
        </p>
        <div className="flex sm:flex-col md:flex-row justify-center gap-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-00/80 font-medium rounded-lg text-base px-8 py-2.5 text-center me-2 mb-2 "
          >
            Explore Now
          </button>
          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Deals & Offers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
