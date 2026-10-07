export default {
  theme: {
    extend: {
      // Design tokens, picked from the design screenshot.
      // Fine-tune them with the exact Figma values later — every component updates from here.
      colors: {
        ink: {
          DEFAULT: '#111111', // main text
          muted: '#6b6b6b', // secondary text (dates), icons
          subtle: '#9e9e9e', // placeholders
        },
        surface: {
          DEFAULT: '#ffffff', // page background, input box
          muted: '#f7f7f7', // Ask AI panel background, hovers
          strong: '#ebebeb', // chat bubble, suggestion chips
        },
        line: '#e5e5e5', // borders
        accent: {
          DEFAULT: '#111111', // primary buttons, send button
          hover: '#333333',
          soft: '#ebebeb',
        },
      },
    },
  },
}
