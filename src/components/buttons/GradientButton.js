import preview from "./Preview/GradientButton";
const GradientButton = {
  title: "GradientButton",
  type: "button",
  preview,
  codes: {
    html: {
      code: `<button class="gradient-btn">Gradient Button</button>`,
      type: "html",
    },
    css: {
      code: `.gradient-btn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #504df7, #8b4df7);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.gradient-btn:hover {
  transform: scale(1.05);
}

.dark .gradient-btn {
  background: linear-gradient(135deg, #1d1d1d, #3f3f3f);
}
`,
      type: "css",
    },
    react: {
      code: `const GradientButton = () => {
  return (
    <button className="px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-primary to-purple-500 hover:scale-105 transition-transform">
      Gradient Button
    </button>
  );
};

export default GradientButton;
`,
      type: "javascript",
    },
  },
  downloadLink: "https://google.com/",
};

export default GradientButton;
