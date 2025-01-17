import preview from "./Preview/RippleLoader";

const Component = {
  title: "RippleLoading",
  type: "loading",
  preview,
  codes: {
    html: {
      code: `<div class="ripple-loader">
  <div></div>
  <div></div>
</div>`,
      type: "xml",
    },
    css: {
      code: `.ripple-loader {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ripple-loader div {
  position: absolute;
  border: 4px solid #3498db;
  border-radius: 50%;
  animation: ripple 1.5s infinite;
}

.ripple-loader div:nth-child(2) {
  animation-delay: 0.75s;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 80px;
    height: 80px;
    opacity: 0;
  }
}`,
      type: "css",
    },
  },
  downloadLink: "https://google.com/",
};

export default Component;
