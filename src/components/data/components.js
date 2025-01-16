import {
  GlassButton,  
  GradientButton,
} from "./buttons.js";

const generateUniqueIds = (components, prefix) => {
  return components.map((component, index) => ({
    ...component,
    id: `${prefix}-${index + 1}`,
  }));
};

const rawButtons = [GradientButton, GlassButton];

export const component = {
  buttons: generateUniqueIds(rawButtons, "button"),
};
