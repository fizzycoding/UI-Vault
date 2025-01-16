import preview from "./Preview/GradientBorderButton";

const GradientBorderButton = {
  title: "GradientBorderButton",
  type: "button",
  preview,
  codes: {
    html: {
      code: `<div class="gradient-border-btn">Gradient Border Button</div>`,
      type: "xml",
    },
    css: {
      code: `.gradient-border-btn {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  background: transparent;
  color: black;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.gradient-border-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, #3b82f6, #14b8a6);
  z-index: -1;
  border-radius: 8px;
  padding: 2px; /* Thickness of the border */
}

.gradient-border-btn.dark {
  color: white;
}

.gradient-border-btn:hover {
  transform: scale(1.05);
}
`,
      type: "css",
    },
    react: {
      code: `export default function GradientBorderButton() {
  return (
    <div className="px-6 py-3 font-bold rounded-lg bg-transparent text-black dark:text-white border-4 border-transparent bg-clip-padding hover:scale-105 transform transition duration-300 ease-in-out relative">
      <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-[2px]"></span>
      <span className="relative z-10">Gradient Border Button</span>
    </div>
  );
}`,
      type: "javascript",
    },
  },
  downloadLink: "https://google.com/",
};

export default GradientBorderButton;
