import { createTheme, MantineColorsTuple } from '@mantine/core';

// Custom Violet Shades (mapping primary '#ccbdff' and primary_container '#7048e8')
const brandViolet: MantineColorsTuple = [
  '#f3efff',
  '#e2d6ff',
  '#ccbdff', // primary dimension / light accent
  '#b39eff',
  '#9b80ff',
  '#805eff',
  '#7048e8', // primary container / main primary
  '#5c37cc',
  '#4a29ab',
  '#371b8a',
];

// Custom Cyan Shades (mapping secondary '#53d7ef' and secondary_container '#00adc4')
const brandCyan: MantineColorsTuple = [
  '#e0fbff',
  '#c7f5ff',
  '#91eeff',
  '#53d7ef', // secondary
  '#1ec7e3',
  '#00adc4', // secondary container
  '#008fa3',
  '#007182',
  '#005461',
  '#003842',
];

// Custom Dark Shades representing "The Void" obsidian space
const brandDark: MantineColorsTuple = [
  '#e1e2eb', // 0: text color (on-surface)
  '#cac3d7', // 1: text-muted color (on-surface-variant)
  '#363940', // 2: surface-bright
  '#32353c', // 3: surface-container-highest
  '#272a31', // 4: surface-container-high
  '#1d2026', // 5: surface-container / active state
  '#191c22', // 6: surface-container-low / card backgrounds
  '#10131a', // 7: surface-dim / main background
  '#0b0e14', // 8: surface-container-lowest
  '#05070a', // 9: pure pitch black void
];

export const theme = createTheme({
  focusRing: 'auto',
  primaryColor: 'brandViolet',
  primaryShade: 6,
  colors: {
    brandViolet,
    brandCyan,
    dark: brandDark, // Overwrite default dark colors for Obsidian theme
  },
  fontFamily: 'var(--font-inter), sans-serif',
  fontFamilyMonospace: 'var(--font-geist-mono), monospace',
  headings: {
    fontFamily: 'var(--font-plus-jakarta-sans), sans-serif',
    fontWeight: '800',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        bg: 'dark.6',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
      },
    },
  },
});
