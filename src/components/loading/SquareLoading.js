import preview from "./Preview/SquareLoading";

const Component = {
  title: "SquareLoading",
  type: "loading",
  preview,
  codes: {
    html: {
      code: `<div class="loading-squares">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>`,
      type: "xml",
    },
    css: {
      code: `.loading-squares {
  display: grid;
  grid-template-columns: repeat(2, 16px);
  gap: 8px;
  transform: rotate(45deg);
}

.loading-squares div {
  width: 16px;
  height: 16px;
  background-color: #ff5722;
  animation: scaleBounce 1.2s infinite ease-in-out;
}

.loading-squares div:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-squares div:nth-child(3) {
  animation-delay: 0.4s;
}

.loading-squares div:nth-child(4) {
  animation-delay: 0.6s;
}

@keyframes scaleBounce {
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
