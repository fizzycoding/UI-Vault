import { buttons } from "./buttons.js";
import { cards } from "./cards.js";
import { loadings } from "./loading.js";

const generateUniqueIds = (components, prefix) => {
  return components.map((component, index) => ({
    ...component,
    id: `${prefix}-${index + 1}`,
  }));
};

const rawButtons = buttons;

export const component = {
  buttons: generateUniqueIds(rawButtons, "button"),
  cards: generateUniqueIds(cards, "card"),
  loading: generateUniqueIds(loadings, "loading"),
};
