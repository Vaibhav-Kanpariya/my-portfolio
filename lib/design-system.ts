// Design System Constants
export const COLORS = {
  // Primary Brand Colors
  PRIMARY: {
    CYAN: "rgb(6 182 212)",
    BLUE: "rgb(59 130 246)",
    PURPLE: "rgb(147 51 234)",
    PINK: "rgb(236 72 153)",
  },

  // Secondary Colors
  SECONDARY: {
    GREEN: "rgb(34 197 94)",
    ORANGE: "rgb(249 115 22)",
    RED: "rgb(239 68 68)",
    YELLOW: "rgb(234 179 8)",
  },

  // Neutral Grays
  NEUTRAL: {
    50: "rgb(249 250 251)",
    100: "rgb(243 244 246)",
    200: "rgb(229 231 235)",
    300: "rgb(209 213 219)",
    400: "rgb(156 163 175)",
    500: "rgb(107 114 128)",
    600: "rgb(75 85 99)",
    700: "rgb(55 65 81)",
    800: "rgb(31 41 55)",
    900: "rgb(17 24 39)",
    950: "rgb(3 7 18)",
  },
} as const;

export const GRADIENTS = {
  PRIMARY: "linear-gradient(135deg, rgb(6 182 212) 0%, rgb(147 51 234) 100%)",
  SECONDARY:
    "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(236 72 153) 100%)",
  ACCENT: "linear-gradient(135deg, rgb(34 197 94) 0%, rgb(6 182 212) 100%)",
  WARM: "linear-gradient(135deg, rgb(249 115 22) 0%, rgb(239 68 68) 100%)",
} as const;

export const SHADOWS = {
  GLOW_CYAN: "0 0 20px rgba(6, 182, 212, 0.3)",
  GLOW_PURPLE: "0 0 20px rgba(147, 51, 234, 0.3)",
  GLOW_BLUE: "0 0 20px rgba(59, 130, 246, 0.3)",
  CARD: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  CARD_HOVER:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
} as const;

export const ANIMATIONS = {
  DURATION: {
    FAST: "150ms",
    NORMAL: "300ms",
    SLOW: "500ms",
  },
  EASING: {
    DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
    IN: "cubic-bezier(0.4, 0, 1, 1)",
    OUT: "cubic-bezier(0, 0, 0.2, 1)",
    IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const TYPOGRAPHY = {
  FONT_FAMILY: {
    SANS: ["Inter", "system-ui", "sans-serif"],
    MONO: ["JetBrains Mono", "monospace"],
  },
  FONT_SIZE: {
    XS: "0.75rem",
    SM: "0.875rem",
    BASE: "1rem",
    LG: "1.125rem",
    XL: "1.25rem",
    "2XL": "1.5rem",
    "3XL": "1.875rem",
    "4XL": "2.25rem",
    "5XL": "3rem",
    "6XL": "3.75rem",
  },
} as const;

export const SPACING = {
  XS: "0.25rem",
  SM: "0.5rem",
  MD: "1rem",
  LG: "1.5rem",
  XL: "2rem",
  "2XL": "3rem",
  "3XL": "4rem",
} as const;
