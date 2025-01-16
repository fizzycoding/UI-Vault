  import icon from "../icons/rocket.png";
  const PriceCard = () => {
    return (
        <div className="border-green-500 border-2 bg-white dark:bg-[#1d1d1d] rounded-lg flex flex-col items-start gap-4 max-w-xs w-full p-4 shadow-lg">
          {/* Recommended Badge */}
          <div className="flex items-center gap-1 text-green-500 border-green-500 border rounded-full px-2 py-1 text-xs font-semibold">
            <img src={icon} alt="rocket" className="w-3 h-3 rounded-full" />
            <span>Recommended</span>
          </div>

          {/* Title and Price */}
          <div className="flex flex-col items-start gap-2 w-full">
            <span className="font-bold text-xl text-gray-900 dark:text-gray-200">
              Professional
            </span>
            <span className="font-extrabold text-4xl text-gray-800 dark:text-gray-200">
              $89<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/month</span>
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              All the basic features but more advanced tools
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

          {/* Features List */}
          <div className="flex flex-col items-start gap-2 w-full">
            <span className="font-semibold text-gray-800 dark:text-gray-200">What you get:</span>
            <ul className="list-none flex flex-col gap-1 text-gray-600 dark:text-gray-400 text-sm font-medium">
              <li>+1300+ templates</li>
              <li>Made with Tailwind</li>
              <li>Responsive design</li>
              <li>100% free</li>
              <li>24/7 support</li>
              <li>Free updates</li>
            </ul>
          </div>

          {/* Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md w-full">
            Get Started
          </button>
        </div>
    );
  };

  export default PriceCard;
