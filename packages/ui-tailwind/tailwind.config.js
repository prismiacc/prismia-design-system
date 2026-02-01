/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // BASE TOKENS
        'base-neutral-offwhite': '#FBFAF8',
        'base-neutral-lightgray': '#ECECEC',
        'base-brand-lavender': '#D8CCE8',
        'base-brand-green': '#CFE1C1',
        'base-contrast-graphite': '#3C3F45',
        'base-contrast-deepgray': '#5A5E66',
        'base-semantic-success': '#1A932E',
        'base-semantic-warning': '#FBB03B',
        'base-semantic-error': '#D64545',
        'base-semantic-info': '#3B82F6',
        
        // SEMANTIC TOKENS
        'semantic-bg-primary': '#FBFAF8',
        'semantic-bg-surface': '#FFFFFF',
        'semantic-bg-tertiary': '#ECECEC',
        'semantic-primary': '#D8CCE8',
        'semantic-primary-hover': '#C9B8DE',
        'semantic-text-primary': '#3C3F45',
        'semantic-text-secondary': '#5A5E66',
        'semantic-text-inverse': '#FFFFFF',
        'semantic-border': '#ECECEC',
        'semantic-border-subtle': 'rgba(60, 63, 69, 0.08)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      borderRadius: {
        'xs': '4px',
        's': '8px',
        'm': '12px',
        'l': '16px',
        'xl': '20px',
      },
      fontSize: {
        'h1': '36px',
        'h2': '28px',
        'h3': '22px',
        'body': '16px',
        'body-small': '14px',
        'caption': '12px',
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'light': '0px 2px 6px rgba(0, 0, 0, 0.06)',
        'medium': '0px 4px 12px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};