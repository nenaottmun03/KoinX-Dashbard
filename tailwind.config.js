/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./index.html", // Path to your index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Path to your React components (JSX/TSX files)
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
        primary: '#1f2937', // Example: Adding a custom color
        secondary: '#4b5563', // Example: Adding a secondary custom color
      },
      spacing: {
        // Add custom spacing values if necessary
        '128': '32rem', // Example: Add larger spacing if needed
      },
    },
  },
  plugins: [],
});
