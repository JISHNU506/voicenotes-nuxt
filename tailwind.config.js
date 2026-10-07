export default {
  theme: {
    extend: {
      // Design tokens. Placeholder values until they're synced with the Figma file —
      // change them here and every base component picks up the new look.
      colors: {
        ink: {
          DEFAULT: '#171717', // main text
          muted: '#737373', // secondary text, icons
          subtle: '#a3a3a3', // placeholders, hints
        },
        surface: {
          DEFAULT: '#ffffff', // page / card background
          muted: '#f5f5f5', // hover, subtle fills
        },
        line: '#e5e5e5', // borders and dividers
        accent: {
          DEFAULT: '#6d28d9',
          hover: '#5b21b6',
          soft: '#ede9fe',
        },
      },
    },
  },
}
