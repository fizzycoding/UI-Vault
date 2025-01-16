import { buttons } from "./buttons.js";

const generateUniqueIds = (components, prefix) => {
  return components.map((component, index) => ({
    ...component,
    id: `${prefix}-${index + 1}`,
  }));
};

const rawButtons = buttons;

export const component = {
  buttons: generateUniqueIds(rawButtons, "button"),
};
