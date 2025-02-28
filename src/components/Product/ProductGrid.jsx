import ProductCard from "./ProductCard";

function ProductGrid({ items, handleAddToCart }) {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-500 mb-6 md:mb-12 pb-8">
            Medal Worthy Brands To Bag
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items &&
              items.map((item, index) => {
                return (
                  <ProductCard
                    key={`${index}-${item.name}`}
                    product={item}
                    handleAddToCart={handleAddToCart}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
