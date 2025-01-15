import Card1 from "./Card1";

const card1 = {
  id: "card1",
  title: "Card 1",
  type: "card",
  prev: Card1,
  codes: {
    html: {
      code: `<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-content">This is a sample card content.</p>
</div>`,
      type: "html",
    },
    javascript: {
      code: `document.querySelector('.card').addEventListener('click', () => {
  alert('Card clicked!');
});`,
      type: "javascript",
    },
    css: {
      code: `.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}
.card-content {
  font-size: 14px;
  color: #555;
}`,
      type: "css",
    },
    react: {
      code: `function Card() {
  return (
    <div className="card">
      <h3 className="card-title">Card Title</h3>
      <p className="card-content">This is a sample card content.</p>
    </div>
  );
}

export default Card;`,
      type: "javascript",
    },
  },
  downloadLink: "https://google.com/",
};

export default card1;
