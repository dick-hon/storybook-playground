import "../src/index.css";

export const parameters = {
  // * create a cb() that appears in the actions panel of the Storybook UI
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
