const Alert = ({ message, type }) => {
  return (
    <div
      className={`fixed left-1/2 top-8 p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg z-50 text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
    >
      {message}
    </div>
  );
};

export default Alert;
