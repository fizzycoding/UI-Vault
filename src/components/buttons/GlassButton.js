import preview from "./Preview/GlassButton";

const GlassButton = {
  title: "GlassButton",
  type: "button",
  preview,
  codes: {
    html: {
      code: `<button class="glass-btn">Glass Button</button>`,
      type: "html",
    },
    css: {
      code: `.glass-btn {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: background 0.2s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}

.dark .glass-btn {
  background: rgba(0, 0, 0, 0.3);
}
`,
      type: "css",
    },
    react: {
      code: ` export default function GlassButton() {
  return (
    <button className="px-4 py-2 font-bold rounded-lg border border-black/30 dark:border-white/50 backdrop-blur-sm bg-white/20 text-black/60 dark:text-white dark:bg-black/30">
      Glass Button
    </button>
  );
}
`,
      type: "javascript",
    },
  },
  downloadLink: "https://google.com/",
};

export default GlassButton;
