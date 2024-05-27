/** @type {import('tailwindcss').Config} */
import Colors from './theme/colors';
import { FontFamily, fontSize } from './theme/fonts';
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: Colors,
    },
    fontSize,
    fontFamily: FontFamily,
  },
  plugins: [],
};
