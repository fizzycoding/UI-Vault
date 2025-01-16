import preview from "./Preview/PriceCard";

const PriceCard = {
  title: "PriceCard",
  type: "card",
  preview,
  codes: {
    html: {
      code: `<div class="card">
  <div class="inner-card">
    <div class="recommended">
      <img src="rocket.png" alt="" />
      <span>Recommended</span>
    </div>
    <span class="title">Professional</span>
    <span class="price">$89<span class="duration">/month</span></span>
    <span class="description">All the basic features but more advanced tools</span>
  </div>
  <div class="line"></div>
  <div class="inner-card">
    <span class="what-you-get">What you get:</span>
    <ul class="list">
      <li>+1300+ templates</li>
      <li>Made with tailwind</li>
      <li>Responsive design</li>
      <li>100% free</li>
      <li>24/7 support</li>
      <li>Free updates</li>
    </ul>
  </div>
  <button class="btn">Get Started</button>
</div>`,
      type: "xml",
    },
    css: {
      code: `.card {
  border: rgb(17, 188, 60) solid 3px;
  background-color: rgba(17, 188, 60, 0.03);
  border-radius: 0.5rem;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  max-width: 15rem;
  width: 100%;
  padding: 0.7rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(17, 188, 60, 0.1);
}

.dark .card {
  background-color: #1d1d1d;
}

.recommended {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
  color: rgb(17, 188, 60);
  border: rgb(17, 188, 60) solid 2px;
  padding: 0.2rem 0.5rem;
  border-radius: 50rem;
  font-size: 0.7rem;
  font-weight: 600;
}

.recommended img {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.5rem;
}

.inner-card {
  gap: 0.5rem;
  display: flex;
  width: 100%;
  align-items: self-start;
  flex-direction: column;
}

.title {
  font-weight: 700;
  font-size: 1.2rem;
  color: #222;
}

.dark .title {
  color: #dfdfdf;
}

.price {
  color: #111;
  font-weight: 800;
  font-size: 2.8rem;
}

.dark .price {
  color: #dfdfdf;
}

.duration {
  font-size: 0.9rem;
  font-weight: 400;
  color: #6a6a6a;
}

.dark .duration {
  color: #afaeae;
}

.description {
  color: #6a6a6a;
  font-size: 0.9rem;
  font-weight: 400;
}

.dark .description {
  color: #afaeae;
}

.line {
  height: 2px;
  width: 100%;
  background-color: #6a6a6a17;
}

.dark .line {
  background-color: #ffffff23;
}

.what-you-get {
  font-weight: 600;
  color: #222;
}

.dark .what-you-get {
  color: #dfdfdf;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #555555;
  font-size: 0.9rem;
  font-weight: 500;
}

.dark .list {
  color: #afaeae;
}

.btn {
  background-color: rgb(17, 188, 60);
  border: none;
  padding: 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  margin-top: 0.5rem;
  width: 100%;
}

.btn:hover {
  background-color: rgb(5, 171, 66);
}`,
      type: "css",
    },
    react: {
      code: `import icon from "../icons/rocket.png";
const PriceCard = () => {
  return (
      <div className="border-green-500 border-2 bg-white dark:bg-[#1d1d1d] rounded-lg flex flex-col items-start gap-4 max-w-xs w-full p-4 shadow-lg">
        <div className="flex items-center gap-1 text-green-500 border-green-500 border rounded-full px-2 py-1 text-xs font-semibold">
          <img src={icon} alt="rocket" className="w-3 h-3 rounded-full" />
          <span>Recommended</span>
        </div>
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
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>
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
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md w-full">
          Get Started
        </button>
      </div>
  );
};

export default PriceCard;`,
      type: "javascript",
    },
  },
  downloadLink: "https://google.com/",
};

export default PriceCard;
