import type { Preview } from "@storybook/react";

/* Importa os tokens globais */
import "../../../packages/tokens/dist/tokens.css";

const preview: Preview = {
  parameters: {
    layout: "centered",

    backgrounds: {
      default: "Prismia Light",
      values: [
        {
          name: "Prismia Light",
          value: "var(--color-bg)"
        },
        {
          name: "Prismia Dark",
          value: "#1A1A1C"
        }
      ]
    },

    a11y: {
      element: "#root",
      manual: false
    },

    controls: {
      expanded: true
    },

    docs: {
      source: {
        state: "open"
      }
    }
  }
};

export default preview;
