import React from "react";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="bg-gray-300 sm:w-5/12 md:w-full sm:h-64 md:h-80 xl:h-96 rounded-lg mx-auto mb-6 md:mb-12 relative shadow-xl">
      <img
        src={product.image}
        alt={product.title}
        className="sm:w-75% md:w-full sm:h-32 md:h-40 xl:h-48 rounded-lg bg-gray-200 object-fill mb-5"
      />
      <h3 className="mt-4 text-sm md:text-base font-medium px-4 text-gray-700">
        {product.title}
      </h3>
      <p className="mt-1 px-4 py-4 mb-8 text-lg font-medium text-gray-900">
        PRICE : ${product.price}
      </p>
      <button
        type="button"
        onClick={() => handleAddToCart(product)}
        className="absolute bottom-2 right-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-3.5 h-3.5 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18 0.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
        Buy now
      </button>
    </div>
  );
}

export default ProductCard;
