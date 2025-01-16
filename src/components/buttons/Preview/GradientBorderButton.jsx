const GradientBorderButton = () => {
  return (
    <div className="relative inline-block p-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg">
      <button className="px-6 py-3 font-bold rounded-md text-gray-800 bg-white dark:bg-black dark:text-white border-2 border-transparent">
        Gradient Button
      </button>
    </div>
  );
};

export default GradientBorderButton;
