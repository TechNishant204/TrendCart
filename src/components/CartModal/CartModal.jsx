import { useEffect } from "react";

const CartModal = ({
  cartItems = [],
  handleRemoveFromCart = () => {},
  handleCloseModal = () => {},
  isModalOpen = false,
  handleCartQuantity = () => {},
}) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shouldShowOverlay = cartItems.length >= 5;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleCloseModal]);

  return (
    <div
      id="cartModal"
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      {shouldShowOverlay && (
        <div className="absolute inset-0 opacity-80" aria-hidden="true"></div>
      )}
      <div
        className={`bg-gray-50 rounded-lg shadow-md p-6 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 overflow-y-auto ${
          shouldShowOverlay ? "max-h-[400px]" : ""
        } relative z-10`}
      >
        <h2 className="text-md md:text-xl font-bold mb-4 text-center ">
          Your Cart
        </h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col mb-4 mx-auto ">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-bold">ITEM : {item.title}</div>
                    <div className="text-gray-600">
                      PRICE: ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center  justify-center">
                  <button
                    onClick={() =>
                      handleCartQuantity(item.id, item.quantity - 1)
                    }
                    className="bg-gray-300 px-2 py-3 rounded hover:bg-red-500"
                    disabled={item.quantity <= 1}
                  >
                    {"-"}
                  </button>
                  <span className="px-8 py-3 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleCartQuantity(item.id, item.quantity + 1)
                    }
                    className="bg-gray-300 px-2 py-3 rounded hover:bg-green-400"
                  >
                    {"+"}
                  </button>
                </div>
              </div>
            ))}
            <div className="font-bold text-right">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        ) : (
          <p>NO ITEMS IN THE CART</p>
        )}
        <button
          onClick={handleCloseModal}
          className="mt-4 bg-sky-500 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
