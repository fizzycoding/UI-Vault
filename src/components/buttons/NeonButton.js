import preview from "./Preview/NeonButton";

const NeonButton = {
  title: "NeonButton",
  type: "button",
  preview,
  codes: {
    html: {
      code: `<button class="neon-btn">Neon Button</button>`,
      type: "html",
    },
    css: {
      code: `.neon-btn {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(to right, #ec4899, #8b5cf6);
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
}

.neon-btn:hover {
  background: linear-gradient(to right, #ec4899, #9333ea);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.dark .neon-btn {
  background: linear-gradient(to right, #ec4899, #5b21b6);
}
`,
      type: "css",
    },
    react: {
      code: `export default function NeonButton() {
  return (
    <button className="px-6 py-3 font-bold rounded-lg border-2 border-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 focus:outline-none transform transition duration-300 ease-in-out shadow-lg hover:scale-105">
      Neon Button
    </button>
  );
}`,
      type: "javascript",
    },
  },
  downloadLink: "https://google.com/",
};

export default NeonButton;
