import preview from "./Preview/PulsingDots";

const Component = {
  title: "PulsingDots",
  type: "loading",
  preview,
  codes: {
    html: {
      code: `<div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
`,
      type: "xml",
    },
    css: {
      code: `.loading {
  display: flex;
  gap: 8px;
}

.loading span {
  width: 12px;
  height: 12px;
  background-color: #007bff;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}`,
      type: "css",
    },
  },
  downloadLink: "https://google.com/",
};

export default Component;
